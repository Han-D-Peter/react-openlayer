/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useCallback, useEffect, useRef } from "react";
import Feature from "ol/Feature";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import Icon from "ol/style/Icon";
import { Text } from "ol/style";
import { Coordinate } from "ol/coordinate";
import Style from "ol/style/Style";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Annotation } from ".";
import { useMap } from "../../hooks/incontext/useMap";
import { icon, makeText } from "../../utils/object";
import { useInteractionEvent } from "../../hooks/incontext/useInteractionEvent";
import { Geometry } from "ol/geom";

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
  onLeave,
  zIndex = 0,
  children,
  opacity = 1,
  isDisabledSelection = false,
  selected = false,
}: CustomMarkerProps) => {
  const map = useMap();
  const annotationRef = useRef<Feature<Point>>(
    new Feature(new Point(fromLonLat(center)))
  );
  const annotationLayerRef = useRef<
    VectorLayer<VectorSource<Feature<Geometry>>>
  >(
    new VectorLayer({
      source: new VectorSource({
        wrapX: false,
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
        scale: 1,
        anchor: [0.5, 0.5], // 마커 이미지의 앵커 위치
      }),
    })
  );

  const onHoverHandler = useCallback(
    (feature: Feature) => {
      if (feature) {
        if (onHover) {
          onHover({ annotation: annotationRef.current, properties });
        }
      }

      // 수정중일땐 팝업 관여하지 않음
      if (map.getProperties().isModifying) return;

      // Pop up text
      if (feature && children?.props.isPopup) {
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
      } else if (feature && children?.props.isPopup) {
        annotationStyleRef.current.setText(new Text());
        annotationRef.current.setStyle(annotationStyleRef.current);
      }
    },
    [children, map, onHover, properties]
  );

  const onClickHandler = () => {
    if (onClick) {
      onClick({
        annotation: annotationRef.current,
        properties,
      });
    }
    // 선택된 Feature에 대한 작업 수행
    // 예: 스타일 변경, 정보 표시 등
  };

  useInteractionEvent({
    annotation: annotationLayerRef.current,
    onClick: onClickHandler,
    onHover: onHoverHandler,
    isDisabledSelection,
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
        scale: 0.5,
        anchor: [0.5, 0.5], // 마커 이미지의 앵커 위치
      })
    );

    annotationRef.current.setStyle(annotationStyleRef.current);
  }, [selected, opacity]);

  useEffect(() => {
    if (!children?.props?.color) return;
    const gottonText = annotationStyleRef.current.getText();
    if (gottonText && gottonText.getFill()) {
      gottonText.getFill()?.setColor(children.props.color);
    }

    annotationRef.current.setStyle(annotationStyleRef.current);
  }, [color, children]);

  useEffect(() => {
    if (annotationLayerRef.current && children && !children.props.isPopup) {
      annotationStyleRef.current.setText(
        makeText({
          text: children?.props?.children || "",
          size: children?.props?.size || 15,
          color: children?.props?.color ? children.props.color : "black",
          outline: children?.props?.outline,
          isMarker: true,
        })
      );
    }
  }, [children]);

  useEffect(() => {
    if (!children) {
      annotationStyleRef.current.setText(new Text());
    }
  }, [children]);

  useEffect(() => {
    annotationRef.current.setProperties({
      ...properties,
      shape: "Marker",
      isModifying: false,
      source: annotationLayerRef.current.getSource(),
      layer: annotationLayerRef.current,
      hasPopup: children ? children?.props.isPopup : false,
    });
  }, [properties]);

  useEffect(() => {
    const annotationLayerCurrent = annotationLayerRef.current;
    map.addLayer(annotationLayerCurrent);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      annotationLayerCurrent.getSource()?.clear();
      map.removeLayer(annotationLayerCurrent);
    };
  }, [map]);
  return <></>;
};
