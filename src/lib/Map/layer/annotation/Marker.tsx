/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from "react";
import { useEffect, useRef } from "react";
import Feature from "ol/Feature";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import Icon from "ol/style/Icon";
import { Text } from "ol/style";
import { Coordinate } from "ol/coordinate";
import Style from "ol/style/Style";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { SelectEvent } from "ol/interaction/Select";
import { Annotation } from ".";
import { useMap } from "../../hooks/incontext/useMap";
import { icon, makeText } from "../../utils/object";
import { useInteractionEvent } from "../../hooks/incontext/useInteractionEvent";

export interface CustomMarkerProps extends Annotation {
  center: Coordinate;
  selected?: boolean;
}

export const CustomMarker = ({
  center,
  color = "BLUE",
  properties = {},
  onClick,
  onHover,
  zIndex = 0,
  selected = false,
  opacity = 1,
  children,
}: CustomMarkerProps) => {
  const map = useMap();
  const annotationRef = useRef<Feature<Point>>(
    new Feature(new Point(fromLonLat(center)))
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
      image: new Icon({
        src: icon.marker, // 마커 이미지 경로
        scale: 0.07,
        anchor: [0.5, 1], // 마커 이미지의 앵커 위치
      }),
    })
  );

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
        annotationStyleRef.current.setText(
          makeText({
            text: children.props.children || "",
            size: children.props.size || 15,
            color: children.props.color ? children.props.color : "black",
            outline: children.props.outline,
            isMarker: true,
          })
        );

        annotationRef.current.setStyle(annotationStyleRef.current);
      } else if (event.selected.length === 0 && children?.props.isPopup) {
        annotationStyleRef.current.setText(new Text());
        annotationRef.current.setStyle(annotationStyleRef.current);
      }
    },
    [children, map, onHover, properties]
  );

  const onClickHandler = (event: SelectEvent) => {
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
  };

  useInteractionEvent({
    annotation: annotationLayerRef.current,
    onClick: onClickHandler,
    onHover: onHoverHandler,
  });

  useEffect(() => {
    if (annotationRef.current) {
      const geometry = annotationRef.current.getGeometry() as Point;
      geometry.setCoordinates(fromLonLat(center));
    }
  }, [center]);

  useEffect(() => {
    if (annotationLayerRef.current) {
      annotationLayerRef.current.setZIndex(zIndex);
    }
  }, [zIndex]);

  useEffect(() => {
    annotationStyleRef.current.setImage(
      new Icon({
        opacity,
        src: selected ? icon.selected : icon.marker, // 마커 이미지 경로
        scale: 0.07,
        anchor: [0.5, 1], // 마커 이미지의 앵커 위치
      })
    );

    annotationRef.current.setStyle(annotationStyleRef.current);
  }, [selected, opacity]);

  useEffect(() => {
    if (!children?.props.color) return;
    annotationStyleRef.current
      .getText()
      .getFill()
      .setColor(children.props.color);

    annotationRef.current.setStyle(annotationStyleRef.current);
  }, [color, children]);

  useEffect(() => {
    if (annotationLayerRef.current && children && !children.props.isPopup) {
      annotationStyleRef.current.setText(
        makeText({
          text: children.props.children || "",
          size: children.props.size || 15,
          color: children.props.color ? children.props.color : "black",
          outline: children.props.outline,
          isMarker: true,
        })
      );
    }
  }, [children]);

  useEffect(() => {
    annotationRef.current.setProperties({
      ...properties,
      shape: "Marker",
      isModifying: false,
      source: annotationLayerRef.current.getSource(),
      layer: annotationLayerRef.current,
      hasPopup: children?.props.isPopup,
    });
  }, [properties]);

  useEffect(() => {
    map.addLayer(annotationLayerRef.current);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      map.removeLayer(annotationLayerRef.current);
      // annotationLayerRef.current.getSource()?.clear();
    };
  }, [map]);
  return <></>;
};
