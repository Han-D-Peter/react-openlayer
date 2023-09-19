/* eslint-disable no-self-assign */
import React, { useCallback } from "react";
import { useEffect, useRef } from "react";
import { Feature } from "ol";
import Circle from "ol/geom/Circle";
import VectorLayer from "ol/layer/Vector";
import Style from "ol/style/Style";
import VectorSource from "ol/source/Vector";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import { fromLonLat } from "ol/proj";
import { SelectEvent } from "ol/interaction/Select";
import { Text } from "ol/style";
import { useMap } from "../../hooks/incontext/useMap";
import { Location } from "../../MapContainer";
import { ANNOTATION_COLOR } from "../../constants/color";
import { makeText } from "../../utils/object";
import { Annotation } from ".";
import { useInteractionEvent } from "../../hooks/incontext/useInteractionEvent";

interface CustomCircleProps extends Annotation {
  center: Location;
  radius: number;
}

export const CustomCircle = ({
  center,
  radius,
  color = "BLUE",
  properties = {},
  onClick,
  onHover,
  zIndex = 0,
  children,
  opacity = 1,
}: CustomCircleProps) => {
  const map = useMap();
  const annotationRef = useRef<Feature<Circle>>(
    new Feature(new Circle(fromLonLat(center), radius))
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
        color: ANNOTATION_COLOR[color].stroke(opacity),
        width: 2,
      }),
      fill: new Fill({
        color: ANNOTATION_COLOR[color].fill(opacity),
      }),
      text:
        children && !children.props.isPopup
          ? makeText({
              text: children.props.children || "",
              size: children.props.size || 15,
              color: children.props.color ? children.props.color : "black",
              outline: children.props.outline,
              isMarker: false,
            })
          : undefined,
    })
  );

  useEffect(() => {
    annotationStyleRef.current.setFill(
      new Fill({
        color: ANNOTATION_COLOR[color].fill(opacity),
      })
    );
    annotationStyleRef.current.setStroke(
      new Stroke({
        color: ANNOTATION_COLOR[color].stroke(opacity),
        width: 2,
      })
    );
  }, [opacity, color]);

  const onHoverHandler = useCallback(
    (event: SelectEvent) => {
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
            isMarker: false,
          })
        );

        annotationRef.current.setStyle(hoveredFeatureStyle);
      } else if (event.selected.length === 0 && children?.props.isPopup) {
        const hoveredFeatureStyle = annotationRef.current.getStyle() as Style;

        hoveredFeatureStyle.setText(new Text());
        annotationRef.current.setStyle(hoveredFeatureStyle);
      }
    },
    [children, map, onHover, properties]
  );

  const onClickHandler = useCallback(
    (event: SelectEvent) => {
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
    },
    [onClick, properties]
  );

  useInteractionEvent({
    annotation: annotationLayerRef.current,
    onClick: onClickHandler,
    onHover: onHoverHandler,
  });

  useEffect(() => {
    if (annotationRef.current) {
      const geometry = annotationRef.current.getGeometry() as Circle;
      geometry.setCenter(fromLonLat(center));
    }
  }, [center]);

  useEffect(() => {
    if (annotationLayerRef.current) {
      annotationLayerRef.current.setZIndex(zIndex);
    }
  }, [zIndex]);

  useEffect(() => {
    const newLayer = new VectorLayer({
      source: new VectorSource({
        features: [annotationRef.current],
      }),
    });
    annotationLayerRef.current = newLayer;
    annotationRef.current.setStyle(annotationStyleRef.current);

    annotationRef.current.setProperties({
      ...properties,
      shape: "Circle",
      isModifying: false,
      source: annotationLayerRef.current.getSource(),
      layer: annotationLayerRef.current,
      hasPopup: children ? children?.props.isPopup : false,
    });

    annotationLayerRef.current.setZIndex(zIndex);

    map.addLayer(annotationLayerRef.current);

    return () => {
      annotationLayerRef.current.getSource()?.clear();
      map.removeLayer(annotationLayerRef.current);
    };
  }, [color, children, map, onHover, properties, onClick]);
  return <></>;
};
