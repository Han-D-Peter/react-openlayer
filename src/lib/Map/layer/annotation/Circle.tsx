/* eslint-disable no-self-assign */
import React, { forwardRef, useImperativeHandle } from "react";
import { useEffect, useRef } from "react";
import Feature from "ol/Feature";
import Circle from "ol/geom/Circle";
import VectorLayer from "ol/layer/Vector";
import Style from "ol/style/Style";
import VectorSource from "ol/source/Vector";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import { fromLonLat } from "ol/proj";
import { Text } from "ol/style";
import { useMap } from "../../hooks/incontext/useMap";
import { Location } from "../../MapContainer";
import { ANNOTATION_COLOR } from "../../constants/color";
import { makeText } from "../../utils/object";
import { Annotation } from ".";
import { useInteractionEvent } from "../../hooks/incontext/useInteractionEvent";
import { Geometry } from "ol/geom";

interface CustomCircleProps extends Annotation {
  center: Location;
  radius: number;
  colorFill?: boolean;
  hasStroke?: boolean;
}

export const CustomCircle = forwardRef<
  VectorLayer<VectorSource<Feature<Geometry>>>,
  CustomCircleProps
>(
  (
    {
      hasStroke = true,
      center,
      radius,
      color = "BLUE",
      properties = {},
      onClick,
      onHover,
      onLeave,
      zIndex = 0,
      children,
      opacity = 1,
      isDisabledSelection = false,
      colorFill = false,
    },
    ref
  ) => {
    const map = useMap();
    const annotationRef = useRef<Feature<Circle>>(
      new Feature(new Circle(fromLonLat(center), radius))
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

    useImperativeHandle(ref, () => annotationLayerRef.current, []);

    const annotationStyleRef = useRef(
      new Style({
        stroke: new Stroke({
          color: hasStroke
            ? ANNOTATION_COLOR[color].stroke(opacity)
            : ANNOTATION_COLOR[color].fill(0.3 * opacity),
          width: 2,
        }),
        fill: new Fill({
          color: colorFill
            ? ANNOTATION_COLOR[color].stroke(opacity)
            : ANNOTATION_COLOR[color].fill(opacity),
        }),
        text:
          children && !children.props.isPopup
            ? makeText({
                text: children.props.children || "",
                size: children.props.size || 15,
                color: children.props.color ? children.props.color : "black",
                outline: children.props.outline,
                isMarker: children.props.upperText,
              })
            : undefined,
      })
    );

    useEffect(() => {
      annotationStyleRef.current.setFill(
        new Fill({
          color: colorFill
            ? ANNOTATION_COLOR[color].stroke(opacity)
            : ANNOTATION_COLOR[color].fill(opacity),
        })
      );
      annotationStyleRef.current.setStroke(
        new Stroke({
          color: hasStroke
            ? ANNOTATION_COLOR[color].stroke(opacity)
            : ANNOTATION_COLOR[color].fill(0.3 * opacity),
          width: 2,
        })
      );
    }, [opacity, color, colorFill, hasStroke]);

    const onHoverHandler = (feature: Feature) => {
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
    };

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
      onLeave: onLeave,
      isDisabledSelection,
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
      const annotationLayerCurrent = annotationLayerRef.current;
      annotationRef.current.setStyle(annotationStyleRef.current);

      annotationRef.current.setProperties({
        ...properties,
        shape: "Circle",
        isModifying: false,
        source: annotationLayerCurrent.getSource(),
        layer: annotationLayerCurrent,
        hasPopup: children ? children?.props.isPopup : false,
      });

      annotationLayerCurrent.setZIndex(zIndex);

      map.addLayer(annotationLayerCurrent);

      return () => {
        annotationLayerCurrent.getSource()?.clear();
        map.removeLayer(annotationLayerCurrent);
      };
    }, [color, children, map, onHover, properties, onClick, colorFill, zIndex]);
    return <></>;
  }
);
