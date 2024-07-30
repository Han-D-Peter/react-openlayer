/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from "react";
import { useEffect, useRef } from "react";
import { Coordinate } from "ol/coordinate";
import Feature from "ol/Feature";
import { ANNOTATION_COLOR } from "../../constants/color";
import { useMap } from "../../hooks";
import { Geometry, MultiPoint } from "ol/geom";
import { fromLonLat } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Circle, Fill, Stroke, Style } from "ol/style";
import { makeText } from "../../utils/object";
import { SelectEvent } from "ol/interaction/Select";
import { Annotation } from ".";
import { useInteractionEvent } from "../../hooks/incontext/useInteractionEvent";

export interface CustomMultiPointProps extends Annotation {
  positions: Coordinate[];
}

export function CustomMultiPoint({
  positions,
  color = "BLUE",
  properties = {},
  onClick,
  onHover,
  zIndex = 0,
  children,
  opacity = 1,
  isDisabledSelection = false,
}: CustomMultiPointProps) {
  const map = useMap();
  const annotationRef = useRef<Feature<MultiPoint>>(
    new Feature(
      new MultiPoint(positions.map((position) => fromLonLat(position)))
    )
  );
  const annotationLayerRef = useRef<VectorLayer<VectorSource>>(
    new VectorLayer({
      source: new VectorSource({}),
    })
  );

  const onHoverHandler = useCallback(
    (feature: Feature) => {
      if (feature) {
        if (onHover) {
          onHover({ annotation: annotationRef.current, properties });
        }
      }
    },
    [onHover, properties]
  );

  const onClickHandler = useCallback(() => {
    if (onClick) {
      onClick({
        annotation: annotationRef.current,
        properties,
      });
    }
    // 선택된 Feature에 대한 작업 수행
    // 예: 스타일 변경, 정보 표시 등
  }, [onClick]);

  useInteractionEvent({
    annotation: annotationLayerRef.current,
    onClick: onClickHandler,
    onHover: onHoverHandler,
    isDisabledSelection,
  });

  useEffect(() => {
    if (annotationLayerRef.current) {
      annotationLayerRef.current.setZIndex(zIndex);
    }
  }, [zIndex]);

  useEffect(() => {
    const geometry = annotationRef.current.getGeometry() as MultiPoint;
    const vectorSource =
      annotationLayerRef.current.getSource() as VectorSource<Geometry>;

    const points = geometry.getPoints().map((point, index) => {
      const text = index + 1; // 순번 설정
      const style = new Style({
        image: new Circle({
          radius: 10,
          fill: new Fill({
            color: ANNOTATION_COLOR[color].fill(opacity), // 원의 색상
          }),
          stroke: new Stroke({
            color: ANNOTATION_COLOR[color].stroke(opacity), // 테두리 선의 색상
            width: 2,
          }),
        }),
        text: makeText({
          text: String(text),
          size: children?.props.size || 15,
          color: children?.props.color ? children.props.color : "black",
          outline: children?.props.outline,
          isMarker: false,
        }),
      });
      style.getText().setText(text.toString());
      const pointFeature = new Feature(point);
      pointFeature.setStyle(style);
      pointFeature.setProperties({
        ...properties,
        shape: "MultiPoint",
        isModifying: false,
        annotation: annotationRef.current,
        source: annotationLayerRef.current.getSource(),
        layer: annotationLayerRef.current,
        hasPopup: children?.props.isPopup,
      });
      return pointFeature;
    });

    if (vectorSource) {
      vectorSource.addFeatures(points);
    }

    map.addLayer(annotationLayerRef.current);

    return () => {
      map.removeLayer(annotationLayerRef.current);
      annotationLayerRef.current.getSource()?.clear();
    };
  }, [color, children, map, onHover, properties, onClick, opacity]);
  return <></>;
}
