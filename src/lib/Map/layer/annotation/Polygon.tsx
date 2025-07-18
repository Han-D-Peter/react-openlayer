/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from "react";
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
import { Text } from "ol/style";
import { Annotation } from ".";
import { makeText } from "../../utils/object";
import { useMap } from "../../hooks/incontext/useMap";
import { ANNOTATION_COLOR } from "../../constants/color";
import { useInteractionEvent } from "../../hooks/incontext/useInteractionEvent";

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
  opacity = 1,
  isDisabledSelection = false,
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
        wrapX: false,
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

  const onClickHandler = useCallback(() => {
    if (onClick) {
      onClick({
        annotation: annotationRef.current,
        properties,
      });
    }
    // 선택된 Feature에 대한 작업 수행
    // 예: 스타일 변경, 정보 표시 등
  }, [onClick, properties]);

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
        const hoveredFeature = feature;

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
      } else if (feature && children?.props.isPopup) {
        const hoveredFeatureStyle = annotationRef.current.getStyle() as Style;

        hoveredFeatureStyle.setText(new Text());
        annotationRef.current.setStyle(hoveredFeatureStyle);
      }
    },
    [children, map, onHover, properties]
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

  useInteractionEvent({
    annotation: annotationLayerRef.current,
    onClick: onClickHandler,
    onHover: onHoverHandler,
    isDisabledSelection,
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
    if (annotationLayerRef.current) {
      annotationLayerRef.current.setZIndex(zIndex);
    }
  }, [zIndex]);

  useEffect(() => {
    if (annotationLayerRef.current && children) {
      annotationStyleRef.current.setText(
        makeText({
          text: children.props.children || "",
          size: children.props.size || 15,
          color: children.props.color ? children.props.color : "black",
          outline: children.props.outline,
          isMarker: false,
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
    const newLayer = new VectorLayer({
      source: new VectorSource({
        features: [annotationRef.current],
      }),
    });
    annotationLayerRef.current = newLayer;
    annotationRef.current.setStyle(annotationStyleRef.current);

    annotationRef.current.setProperties({
      ...properties,
      shape: "Polygon",
      isModifying: false,
      source: annotationLayerRef.current.getSource(),
      layer: annotationLayerRef.current,
      hasPopup: children ? children?.props.isPopup : false,
    });
    annotationLayerRef.current.setZIndex(zIndex);

    map.addLayer(annotationLayerRef.current);

    return () => {
      map.removeLayer(annotationLayerRef.current);
      annotationLayerRef.current.getSource()?.clear();
    };
  }, [color, map, onHover, properties, onClick, children, zIndex]);
  return <></>;
};
