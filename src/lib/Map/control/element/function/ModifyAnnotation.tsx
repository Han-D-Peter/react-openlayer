import React, { useId } from "react";
import { Button, ButtonProps } from "../Button";
import { useCallback, useEffect, useRef } from "react";
import Modify from "ol/interaction/Modify";
import Snap from "ol/interaction/Snap";
import { altShiftKeysOnly } from "ol/events/condition";
import { Collection, Feature } from "ol";
import { ModifyEvent } from "ol/interaction/Modify";
import { useFeatureStore, useMap, useSelectAnnotation } from "../../../hooks";
import { useControlSection } from "../../layout";
import { InnerButton } from "../InnerButton";
import { Geometry } from "ol/geom";
import { useFeaturesStore } from "src/lib/Map/FeaturesStore";
import { positionsFromFeature } from "src/lib/utils";
import { Coordinate } from "ol/coordinate";
import { MakeGeojsonShape } from "src/lib/utils/makeGeojsonShape";
import { ModifyIcon } from "src/lib/Map/constants/icons/ModifyIcon";
import { MapBrowserEvent } from "ol";
import Select from "ol/interaction/Select";
import { mouseActionButton } from "ol/events/condition";
import { useVectorSourceContext } from "../../../hooks/incontext/useVectorSourceContext";

export interface ModifyAnnotationProps extends ButtonProps {
  onModifyChange?: (e: ModifyEvent) => void;
  target: Feature<Geometry> | null;
}

export function ModifyAnnotation({
  onModifyChange,
  target,
  disabled,
  ...props
}: ModifyAnnotationProps) {
  const clickedAnnotation = useSelectAnnotation();
  const { selectedFeature } = useFeatureStore();

  const { updateGeoJson, getGeoJsonElement } = useFeaturesStore();

  const modifyInteractionRef = useRef<Modify | null>(null);
  const snapInteractionRef = useRef<Snap | null>(null);

  const map = useMap();
  const id = useId();
  const buttonId = `controlbutton-${id}`;
  const { selectButton, selectedButtonId } = useControlSection();
  const isActive = buttonId === selectedButtonId;
  const pickingHandlerRef = useRef<((e: MapBrowserEvent<any>) => void) | null>(
    null
  );
  const selectInteractionRef = useRef<Select | null>(null);
  const { getVectorSources } = useVectorSourceContext();
  const getCandidateIds = useCallback((sel: any): string[] => {
    if (!sel || typeof sel !== "object") return [];
    const keys = ["id", "featureId", "feature_id", "gid"];
    const ids = keys
      .map((k) => sel?.[k])
      .filter((v) => v !== undefined && v !== null)
      .map((v) => String(v));
    return Array.from(new Set(ids));
  }, []);
  const collectAllVectorSources = useCallback(() => {
    const found: any[] = [];
    const walk = (group: any) => {
      if (!group) return;
      const layers = group.getLayers?.().getArray?.() || [];
      layers.forEach((ly: any) => {
        const src = ly.getSource?.();
        if (src && typeof src.getClosestFeatureToCoordinate === "function") {
          found.push(src);
        }
        if (typeof ly.getLayers === "function") {
          walk(ly);
        }
      });
    };
    // root
    const rootLayers = map.getLayers().getArray();
    rootLayers.forEach((ly: any) => {
      const src = ly.getSource?.();
      if (src && typeof src.getClosestFeatureToCoordinate === "function") {
        found.push(src);
      }
      if (typeof ly.getLayers === "function") {
        walk(ly);
      }
    });
    return found;
  }, [map]);

  const onModifyStart = useCallback(() => {
    const existMapProperties = map.getProperties();

    map.setProperties({ ...existMapProperties, isModifying: true });
  }, [map]);

  const onModifyEnd = useCallback(
    (event: ModifyEvent) => {
      const targetFeature = event.features.getArray()[0];
      const targetId = String(targetFeature.getId());

      const newPosition = positionsFromFeature(targetFeature, true) as
        | Coordinate
        | Coordinate[];
      const targetGeoJson = getGeoJsonElement(targetId)!;

      const newGeometry =
        targetGeoJson.geometry.type === "Point"
          ? {
              type: "Point",
              coordinates: newPosition as Coordinate,
            }
          : {
              type: targetGeoJson.geometry.type,
              coordinates: newPosition as Coordinate[],
            };

      updateGeoJson(targetId, {
        ...targetGeoJson,
        geometry: newGeometry as MakeGeojsonShape,
      });
      if (onModifyChange) {
        onModifyChange(event);
      }

      const existMapProperties = map.getProperties();

      map.setProperties({ ...existMapProperties, isModifying: false });
    },
    [getGeoJsonElement, map, onModifyChange, updateGeoJson]
  );

  // 수정중임을 map 에 명시 + 대상 변화에 따라 Modify/Snap 재설정
  useEffect(() => {
    const existMapProperties = map.getProperties();

    map.setProperties({ ...existMapProperties, isModifying: isActive });

    // 수정 중에는 이동/더블클릭 줌을 비활성화하여 개입을 방지
    map.getInteractions().forEach((interaction: any) => {
      const name = interaction?.constructor?.name;
      if (name === "DragPan" || name === "DoubleClickZoom") {
        interaction.setActive(!isActive);
      }
    });

    // 단, 반드시 OpenLayers Feature 인스턴스여야 함
    const candidates = [target, clickedAnnotation, selectedFeature] as any[];
    const activeFeature = candidates.find(
      (f) => f && typeof f.getGeometry === "function"
    ) as any;

    // 기존 인터랙션 제거
    if (modifyInteractionRef.current) {
      modifyInteractionRef.current.un("modifystart", onModifyStart);
      modifyInteractionRef.current.un("modifyend", onModifyEnd);
      map.removeInteraction(modifyInteractionRef.current);
      modifyInteractionRef.current = null;
    }
    if (snapInteractionRef.current) {
      map.removeInteraction(snapInteractionRef.current);
      snapInteractionRef.current = null;
    }

    if (!isActive) return;

    // 대상이 아직 없을 때: selectedFeature의 id로 실제 Feature 해석을 시도
    let featureForInstall: any = activeFeature;
    if (!featureForInstall && selectedFeature) {
      const ids = getCandidateIds(selectedFeature);
      if (ids.length) {
        let sources = getVectorSources?.() || [];
        if (!sources.length) sources = collectAllVectorSources();
        for (const id of ids) {
          for (const src of sources) {
            try {
              const byId = (src as any).getFeatureById?.(id);
              if (byId && typeof byId.getGeometry === "function") {
                featureForInstall = byId;
                break;
              }
            } catch {}
          }
          if (featureForInstall) break;
        }
      }
    }

    if (!featureForInstall) return;

    // 새 인터랙션 설치
    const features = new Collection([featureForInstall]);

    modifyInteractionRef.current = new Modify({
      features,
      deleteCondition: altShiftKeysOnly,
    });
    snapInteractionRef.current = new Snap({ features });

    modifyInteractionRef.current.on("modifystart", onModifyStart);
    modifyInteractionRef.current.on("modifyend", onModifyEnd);
    map.addInteraction(snapInteractionRef.current);
    map.addInteraction(modifyInteractionRef.current);

    return () => {
      if (modifyInteractionRef.current) {
        modifyInteractionRef.current.un("modifystart", onModifyStart);
        modifyInteractionRef.current.un("modifyend", onModifyEnd);
        map.removeInteraction(modifyInteractionRef.current);
        modifyInteractionRef.current = null;
      }
      if (snapInteractionRef.current) {
        map.removeInteraction(snapInteractionRef.current);
        snapInteractionRef.current = null;
      }

      // 수정 종료 시 이동/더블클릭 줌을 원복
      map.getInteractions().forEach((interaction: any) => {
        const name = interaction?.constructor?.name;
        if (name === "DragPan" || name === "DoubleClickZoom") {
          interaction.setActive(true);
        }
      });
    };
  }, [
    isActive,
    map,
    onModifyEnd,
    onModifyStart,
    target,
    clickedAnnotation,
    selectedFeature,
    getVectorSources,
    collectAllVectorSources,
    getCandidateIds,
  ]);

  // 활성화 직후 대상이 없을 때: 첫 클릭으로 대상 피처를 즉시 선택하고 Modify를 설치
  useEffect(() => {
    if (!isActive) {
      if (pickingHandlerRef.current) {
        map.un("singleclick", pickingHandlerRef.current as any);
        pickingHandlerRef.current = null;
      }
      if (selectInteractionRef.current) {
        map.removeInteraction(selectInteractionRef.current);
        selectInteractionRef.current = null;
      }
      return;
    }

    // 이미 대상이 결정되어 있으면 필요 없음
    const hasActive = [target, clickedAnnotation, selectedFeature].some(
      (f: any) => f && typeof f.getGeometry === "function"
    );

    if (hasActive) return;

    // 우선 Select 인터랙션으로 피처를 안정적으로 획득
    if (!selectInteractionRef.current) {
      selectInteractionRef.current = new Select({
        condition: (e) => e.type === "pointerdown" && mouseActionButton(e),
        hitTolerance: 10,
        layers: () => true,
      });
      selectInteractionRef.current.on("select", (ev) => {
        const f: any = ev.selected?.[0];

        if (!f || typeof f.getGeometry !== "function") return;

        // 기존 인터랙션 제거
        if (modifyInteractionRef.current) {
          modifyInteractionRef.current.un("modifystart", onModifyStart);
          modifyInteractionRef.current.un("modifyend", onModifyEnd);
          map.removeInteraction(modifyInteractionRef.current);
          modifyInteractionRef.current = null;
        }
        if (snapInteractionRef.current) {
          map.removeInteraction(snapInteractionRef.current);
          snapInteractionRef.current = null;
        }

        const features = new Collection([f]);
        modifyInteractionRef.current = new Modify({
          features,
          deleteCondition: altShiftKeysOnly,
        });
        snapInteractionRef.current = new Snap({ features });

        modifyInteractionRef.current.on("modifystart", onModifyStart);
        modifyInteractionRef.current.on("modifyend", onModifyEnd);
        map.addInteraction(snapInteractionRef.current);
        map.addInteraction(modifyInteractionRef.current);

        // 한 번 선택되면 Select 인터랙션 제거
        if (selectInteractionRef.current) {
          map.removeInteraction(selectInteractionRef.current);
          selectInteractionRef.current = null;
        }
      });
      map.addInteraction(selectInteractionRef.current);
    }

    const handler = (evt: MapBrowserEvent<any>) => {
      // 다른 클릭 핸들러(최근센터 등)와 충돌 방지

      evt.preventDefault();
      evt.stopPropagation();
      // 1) 우선 소스 기반 근접 픽킹 (레이어 hit detection 실패 대비)
      const coordinate = evt.coordinate;
      let picked: any = null;
      let sources = getVectorSources?.() || [];
      if (!sources.length) {
        sources = collectAllVectorSources();
      }
      for (const src of sources) {
        try {
          const closest = (src as any).getClosestFeatureToCoordinate(
            coordinate
          );
          if (!closest) continue;
          // 거리 허용치(픽셀 기준)를 해석: 지도의 해상도 * N
          const closestPoint = closest
            .getGeometry()
            .getClosestPoint(coordinate);
          const p1 = map.getPixelFromCoordinate(coordinate);
          const p2 = map.getPixelFromCoordinate(closestPoint);
          const dx = p1[0] - p2[0];
          const dy = p1[1] - p2[1];
          const distPx = Math.sqrt(dx * dx + dy * dy);
          if (distPx <= 12) {
            picked = closest;
            break;
          }
        } catch {}
      }
      // 2) 실패 시 기본 forEachFeatureAtPixel 시도
      if (!picked) {
        picked = map.forEachFeatureAtPixel(
          evt.pixel,
          (f: any) => (typeof f.getGeometry === "function" ? f : null),
          { hitTolerance: 12 }
        );
      }

      if (!picked) return;

      // 기존 인터랙션 제거
      if (modifyInteractionRef.current) {
        modifyInteractionRef.current.un("modifystart", onModifyStart);
        modifyInteractionRef.current.un("modifyend", onModifyEnd);
        map.removeInteraction(modifyInteractionRef.current);
        modifyInteractionRef.current = null;
      }
      if (snapInteractionRef.current) {
        map.removeInteraction(snapInteractionRef.current);
        snapInteractionRef.current = null;
      }

      const features = new Collection([picked]);
      modifyInteractionRef.current = new Modify({
        features,
        deleteCondition: altShiftKeysOnly,
      });
      snapInteractionRef.current = new Snap({ features });

      modifyInteractionRef.current.on("modifystart", onModifyStart);
      modifyInteractionRef.current.on("modifyend", onModifyEnd);
      map.addInteraction(snapInteractionRef.current);
      map.addInteraction(modifyInteractionRef.current);

      // 한 번 설치했으면 더 이상 클릭을 듣지 않음
      if (pickingHandlerRef.current) {
        map.un("singleclick", pickingHandlerRef.current as any);
        pickingHandlerRef.current = null;
      }
    };

    pickingHandlerRef.current = handler;
    map.on("singleclick", handler);

    return () => {
      if (pickingHandlerRef.current) {
        map.un("singleclick", pickingHandlerRef.current as any);
        pickingHandlerRef.current = null;
      }
    };
  }, [
    isActive,
    map,
    target,
    clickedAnnotation,
    selectedFeature,
    onModifyStart,
    onModifyEnd,
    getVectorSources,
    collectAllVectorSources,
  ]);

  return (
    <Button
      id={buttonId}
      isDisabled={disabled}
      disabled={disabled}
      hasPopup
      popupText="Modify"
      onClick={() => {
        if (isActive) {
          selectButton("");
        } else {
          selectButton(buttonId);
        }
      }}
      isActive={isActive}
      {...props}
    >
      <InnerButton isActive={isActive}>
        <ModifyIcon size={24} color={isActive ? "white" : "#455A64"} />
      </InnerButton>
    </Button>
  );
}
