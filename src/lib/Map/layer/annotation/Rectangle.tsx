import Feature from "ol/Feature";
import { Select } from "ol/interaction";
import { useCallback, useEffect, useRef } from "react";
import { Coordinate } from "ol/coordinate";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import { Polygon } from "ol/geom";
import { fromLonLat } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { click, pointerMove } from "ol/events/condition";
import { SelectEvent } from "ol/interaction/Select";
import { useMap } from "../../hooks/incontext/useMap";
import { makeText } from "../../utils/object";
import { ANNOTATION_COLOR } from "../../constants/color";
import { Annotation } from ".";
import React from "react";
import { Text } from "ol/style";
import { useInteractionEvent } from "../../hooks/incontext/useInteractionEvent";

export interface CustomRectangleProps extends Annotation {
  positions: Coordinate[][];
}

export const CustomRectangle = ({
  positions,
  color = "BLUE",
  properties = {},
  onClick,
  onHover,
  zIndex = 0,
  children,
}: CustomRectangleProps) => {
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

  const onHoverHandler = useCallback((event: SelectEvent) => {
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
  }, []);

  const onClickHandler = useCallback((event: SelectEvent) => {
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
  }, []);

  useInteractionEvent({
    annotation: annotationLayerRef.current,
    onClick: onClickHandler,
    onHover: onHoverHandler,
  });

  useEffect(() => {
    if (annotationRef.current) {
      const geometry = annotationRef.current.getGeometry() as Polygon;
      geometry.setCoordinates([
        positions[0].map((position) => fromLonLat(position)),
      ]);
    }
  }, [positions]);

  useEffect(() => {
    if (annotationLayerRef.current && zIndex) {
      annotationLayerRef.current.setZIndex(zIndex);
    }
  }, [zIndex]);

  useEffect(() => {
    if (!map) return;
    annotationRef.current.setStyle(annotationStyleRef.current);

    annotationRef.current.setProperties({
      shape: "Rectangle",
      isModifying: false,
      source: annotationLayerRef.current.getSource(),
      layer: annotationLayerRef.current,
      hasPopup: children?.props.isPopup,
    });

    annotationLayerRef.current.setZIndex(zIndex);

    map.addLayer(annotationLayerRef.current);

    return () => {
      map.removeLayer(annotationLayerRef.current);
    };
  }, [children, color, map, onClick, onHover, properties]);
  return <></>;
};
