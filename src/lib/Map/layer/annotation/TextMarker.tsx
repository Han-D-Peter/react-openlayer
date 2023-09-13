import React from "react";
import { Coordinate } from "ol/coordinate";
import Feature from "ol/Feature";
import { useEffect, useRef } from "react";
import Style from "ol/style/Style";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Select } from "ol/interaction";
import { click, pointerMove } from "ol/events/condition";
import { SelectEvent } from "ol/interaction/Select";
import { useMap } from "../../hooks/incontext/useMap";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import Text from "ol/style/Text";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import { Annotation } from ".";
import { useInteractionEvent } from "../../hooks";

export interface TextMarkerProps extends Annotation {
  center: Coordinate;
}

export const TextMarker = ({
  center,
  color = "BLUE",
  properties = {},
  onClick,
  onHover,
  children,
  opacity,
  zIndex = 0,
}: TextMarkerProps) => {
  const map = useMap();
  const annotationRef = useRef<Feature<Point>>(
    new Feature({ geometry: new Point(fromLonLat(center)) })
  );

  const annotationLayerRef = useRef<VectorLayer<VectorSource>>(
    new VectorLayer({
      source: new VectorSource({
        features: [annotationRef.current],
      }),
    })
  );

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

  useEffect(() => {
    if (annotationRef.current) {
      const geometry = annotationRef.current.getGeometry() as Point;
      geometry.setCoordinates(fromLonLat(center));
    }
  }, [center]);

  useEffect(() => {
    if (annotationLayerRef.current && zIndex) {
      annotationLayerRef.current.setZIndex(zIndex);
    }
  }, [zIndex]);

  useInteractionEvent({
    annotation: annotationLayerRef.current,
    onClick: onClickHandler,
    onHover: onHoverHandler,
  });

  useEffect(() => {
    annotationRef.current.setStyle(
      new Style({
        text: new Text({
          text: children ? children.props.children : "",
          font: `${children?.props.size || 15}px Arial`, // 텍스트의 폰트 및 크기
          fill: new Fill({
            color: children?.props.color ? children.props.color : "white", // 텍스트의 색상
          }),
          overflow: true,
          offsetX: 0,
          offsetY: -15,
          stroke: children?.props.outline
            ? new Stroke({
                color: `white`,
                width: 3,
              })
            : undefined,
        }),
      })
    );

    const vectorSource = new VectorSource({
      features: [annotationRef.current],
    });
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    annotationLayerRef.current = vectorLayer;
    annotationRef.current.setProperties({
      ...properties,
      shape: "TextMarker",
      isModifying: false,
      source: vectorSource,
      layer: vectorLayer,
    });
    vectorLayer.setZIndex(zIndex);

    map.addLayer(vectorLayer);

    return () => {
      map.removeLayer(vectorLayer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, children, map, onHover, properties, onClick, opacity]);
  return <></>;
};
