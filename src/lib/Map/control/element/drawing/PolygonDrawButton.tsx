import React, { useId, useState } from "react";
import { Button, ButtonProps } from "../Button";
import { useEffect, useRef } from "react";
import { Draw, Snap } from "ol/interaction";
import { useFeatureStore, useMap } from "../../../hooks";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import { makeText } from "../../../utils/object";
import { DrawEvent } from "ol/interaction/Draw";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import Icon from "ol/style/Icon";
import { Feature } from "ol";
import { Geometry, Polygon } from "ol/geom";
import { PolygonIcon } from "../../../constants/icons/PolygonIcon";
import { useControlSection } from "../../layout";
import { BoundingBox } from "@phosphor-icons/react";
import { InnerButton } from "../InnerButton";
import useDrawSource from "src/lib/Map/hooks/incontext/useDrawSource";
import { ANNOTATION_COLOR } from "src/lib/Map/constants";

export interface PolygonDrawButtonProps extends ButtonProps {
  /**
   * @description You can get Multipoint feature what was made by callback function.
   */
  onEnd?: (features: Feature<Geometry>) => void;

  /**
   * @description You can set callback Fn on 'start' event.
   */
  onStart?: () => void;

  /**
   * @default false
   * @description Well... Sometimes you need this drawing tool with using server waht containes DB. if 'onCanvas' set false, react-openlayer will not draw feature on canvas.
   */
  onCanvas?: boolean;
  color?: keyof typeof ANNOTATION_COLOR;
}

export function PolygonDrawButton({
  onEnd,
  onStart,
  onClick,
  onCanvas = false,
  color = "BLUE",
  ...props
}: PolygonDrawButtonProps) {
  const map = useMap();
  const id = useId();
  const buttonId = `controlbutton-${id}`;
  const { selectButton, selectedButtonId } = useControlSection();
  const [count, setCount] = useState(0);

  const isActive = buttonId === selectedButtonId;
  const { selectFeature } = useFeatureStore();
  const { drawVectorSource } = useDrawSource();
  const vectorLayerRef = useRef(new VectorLayer({ zIndex: 1000 }));
  const drawRef = useRef(
    new Draw({
      source: onCanvas ? drawVectorSource : undefined,
      type: "Polygon",
      style: new Style({
        zIndex: 1000,
        stroke: new Stroke({
          color: ANNOTATION_COLOR[color].stroke(1),
          width: 2,
        }),
        fill: new Fill({
          color: ANNOTATION_COLOR[color].fill(1),
        }),
        // image: new Icon({
        //   src: "/images/polygon.svg", // 마커 이미지 경로
        //   anchor: [0.5, 1], // 마커 이미지의 앵커 위치
        // }),
      }),
    })
  );

  useEffect(() => {
    drawRef.current = new Draw({
      source: onCanvas ? drawVectorSource : undefined,
      type: "Polygon",
      style: new Style({
        zIndex: 1000,
        stroke: new Stroke({
          color: ANNOTATION_COLOR[color].stroke(1),
          width: 2,
        }),
        fill: new Fill({
          color: ANNOTATION_COLOR[color].fill(1),
        }),
        // image: new Icon({
        //   src: "/images/polygon.svg", // 마커 이미지 경로
        //   anchor: [0.5, 1], // 마커 이미지의 앵커 위치
        // }),
      }),
    });
  }, [onCanvas, color]);
  const startDrawing = () => {
    if (onClick) {
      onClick();
    }
    if (onStart) {
      onStart();
    }
    map.setProperties({ isDrawing: true });
    drawRef.current.setActive(true);
    map.getViewport().style.cursor = "crosshair";
  };

  const finishDrawingByRightClick = (e: MouseEvent) => {
    setCount((prev) => prev + 1);
    if (e.button === 2) {
      e.preventDefault();
      if (count < 3) {
        drawRef.current.abortDrawing();
        setCount(0);
        selectButton("");
        drawRef.current.setActive(false);
        return;
      }
      drawRef.current.finishDrawing();
      map.getViewport().style.cursor = "pointer";
    }
  };

  const drawing = (event: DrawEvent) => {
    const feature = event.feature;
    const geometry = feature.getGeometry() as Polygon;

    feature.setStyle(
      new Style({
        zIndex: 1000,
        stroke: new Stroke({
          color: ANNOTATION_COLOR[color].stroke(1),
          width: 2,
        }),
        fill: new Fill({
          color: ANNOTATION_COLOR[color].fill(0.1),
        }),
        text: makeText({
          text: "unknown",
          size: 15,
          color: "black",
          outline: true,
          isMarker: true,
        }),
      })
    );
    feature.setProperties({
      shape: "Polygon",
      isModifying: false,
      source: drawVectorSource,
      layer: vectorLayerRef.current,
      positions: geometry.getCoordinates(),
    });
    selectButton("");
    map.getViewport().style.cursor = "pointer";
    drawRef.current.setActive(true);
    if (onEnd) {
      onEnd(feature);
    }
    if (onCanvas) {
      selectFeature(feature);
    }

    setTimeout(() => map.setProperties({ isDrawing: false }), 100);
  };

  useEffect(() => {
    const vectorLayer = new VectorLayer({
      source: drawVectorSource,
    });
    map.addLayer(vectorLayer);
    const drawingInstance = drawRef.current;
    map.addInteraction(drawingInstance);
    drawingInstance.on("drawend", drawing);
    map.getViewport().addEventListener("mousedown", finishDrawingByRightClick);
    return () => {
      map.removeInteraction(drawingInstance);
      drawingInstance.un("drawend", drawing);
      map
        .getViewport()
        .removeEventListener("mousedown", finishDrawingByRightClick);
    };
  }, []);

  useEffect(() => {
    if (!isActive) {
      map.removeInteraction(drawRef.current);
    } else {
      map.addInteraction(drawRef.current);
    }

    const snap = new Snap({
      source: drawVectorSource,
    });
    map.addInteraction(snap);
    return () => {
      map.removeInteraction(snap);
    };
  }, [isActive, map]);

  useEffect(() => {
    vectorLayerRef.current.setSource(drawVectorSource);
    if (onCanvas) {
      map.addLayer(vectorLayerRef.current);
    } else {
      map.removeLayer(vectorLayerRef.current);
    }
  }, [onCanvas, map]);

  return (
    <Button
      id={buttonId}
      hasPopup
      popupText="Polygon"
      onClick={() => {
        if (isActive) {
          selectButton("");
          map.setProperties({ isDrawing: false });
          map.getViewport().style.cursor = "pointer";
        } else {
          selectButton(buttonId);
          startDrawing();
        }
      }}
      isActive={isActive}
      {...props}
    >
      <InnerButton isActive={isActive}>
        <BoundingBox size={26} color={isActive ? "white" : "black"} />
      </InnerButton>
    </Button>
  );
}
