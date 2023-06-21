import React from "react";
import { Coordinate } from "ol/coordinate";
import Feature from "ol/Feature";
import { useEffect, useRef } from "react";
import { Polygon } from "ol/geom";
import { fromLonLat } from "ol/proj";
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Select } from "ol/interaction";
import { click, pointerMove } from "ol/events/condition";
import { SelectEvent } from "ol/interaction/Select";
import { Text } from "ol/style";
import { Annotation } from ".";
import { makeText } from "../../utils/object";
import { useMap } from "../../hooks/incontext/useMap";
import { ANNOTATION_COLOR } from "../../constants/color";

export interface CustomPolygonProps extends Annotation {
  positions: Coordinate[][];
}

export const CustomPolygon = ({
  positions,
  color = "BLUE",
  properties = {},
  onClick,
  onHover,
  zIndex = 0,
  children,
}: CustomPolygonProps) => {
  const map = useMap();
  const annotationRef = useRef<Feature<Polygon>>(
    new Feature(
      new Polygon([positions[0].map((position) => fromLonLat(position))])
    )
  );
  const annotationLayerRef = useRef<VectorLayer<VectorSource>>(
    new VectorLayer({
      source: new VectorSource({
        features: [annotationRef.current],
      }),
    })
  );

  const annotationStyleRef = useRef(
    new Style({
      stroke: new Stroke({
        color: ANNOTATION_COLOR[color].stroke,
        width: 2,
      }),
      fill: new Fill({
        color: ANNOTATION_COLOR[color].fill,
      }),
      text:
        children && !children.props.isPopup
          ? makeText({
              text: children.props.children || "",
              size: children.props.size || 15,
              color: children.props.color ? children.props.color : "black",
              outline: children.props.outline,
              isMarker: true,
            })
          : undefined,
    })
  );

  useEffect(() => {
    if (annotationRef.current) {
      const geometry = annotationRef.current.getGeometry() as Polygon;
      geometry.setCoordinates([
        positions[0].map((position) => fromLonLat(position)),
      ]);
    }
  }, [positions]);

  useEffect(() => {
    if (annotationLayerRef.current) {
      annotationLayerRef.current.setZIndex(zIndex);
    }
  }, [zIndex]);

  useEffect(() => {
    annotationRef.current.setStyle(annotationStyleRef.current);

    annotationRef.current.setProperties({
      shape: "Polygon",
      isModifying: false,
      source: annotationLayerRef.current.getSource(),
      layer: annotationLayerRef.current,
      hasPopup: children?.props.isPopup,
    });
    annotationLayerRef.current.setZIndex(zIndex);

    const clickSelect = new Select({
      condition: click,
      style: null,
      layers: [annotationLayerRef.current],
    });

    const hoverSelect = new Select({
      condition: pointerMove,
      style: null,
      layers: [annotationLayerRef.current],
    });

    map.addInteraction(hoverSelect);
    map.addInteraction(clickSelect);
    map.addLayer(annotationLayerRef.current);

    function onHoverHandler(event: SelectEvent) {
      if (event.selected.length > 0) {
        if (onHover) {
          onHover({ annotation: annotationRef.current, properties });
        }
      } else {
        // hover 이벤트에 의해 선택된 Circle이 없는 경우
        // 선택 해제에 대한 작업 수행
        // 예: 기본 스타일 복원 등
      }

      // 수정중일땐 팝업 관여하지 않음
      if (map.getProperties().isModifying) return;

      // Pop up text
      if (event.selected.length > 0 && children?.props.isPopup) {
        const hoveredFeature = event.selected[0];

        const hoveredFeatureStyle = hoveredFeature.getStyle() as Style;
        hoveredFeatureStyle.setText(
          makeText({
            text: children.props.children || "",
            size: children.props.size || 15,
            color: children.props.color ? children.props.color : "black",
            outline: children.props.outline,
            isMarker: true,
          })
        );

        annotationRef.current.setStyle(hoveredFeatureStyle);
      } else if (event.selected.length === 0 && children?.props.isPopup) {
        const hoveredFeatureStyle = annotationRef.current.getStyle() as Style;

        hoveredFeatureStyle.setText(new Text());
        annotationRef.current.setStyle(hoveredFeatureStyle);
      }
    }

    function onClickHandler(event: SelectEvent) {
      if (event.selected.length > 0) {
        // 클릭 이벤트에 의해 선택된 Circle이 있는 경우
        if (onClick) {
          onClick({
            annotation: annotationRef.current,
            properties,
          });
        }
        // 선택된 Feature에 대한 작업 수행
        // 예: 스타일 변경, 정보 표시 등
      }
    }
    hoverSelect.on("select", onHoverHandler);
    clickSelect.on("select", onClickHandler);

    return () => {
      hoverSelect.un("select", onHoverHandler);
      clickSelect.un("select", onClickHandler);
      map.removeInteraction(hoverSelect);
      map.removeInteraction(clickSelect);
      map.removeLayer(annotationLayerRef.current);
    };
  }, [color, map, onHover, properties, onClick]);
  return <></>;
};
