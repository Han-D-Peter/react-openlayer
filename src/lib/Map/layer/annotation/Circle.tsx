/* eslint-disable no-self-assign */
import React from "react";
import { useEffect, useRef } from "react";
import { Feature } from "ol";
import Circle from "ol/geom/Circle";
import VectorLayer from "ol/layer/Vector";
import Style from "ol/style/Style";
import VectorSource from "ol/source/Vector";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import { fromLonLat } from "ol/proj";
import { Select } from "ol/interaction";
import { click, pointerMove } from "ol/events/condition";
import { SelectEvent } from "ol/interaction/Select";
import { Text } from "ol/style";
import useMap from "../../hooks/incontext/useMap";
import { Location } from "../../Map";
import { ANNOTATION_COLOR } from "../../constants/color";
import { makeText } from "../../utils/object";
import { Annotation } from ".";

interface CustomCircleProps extends Annotation {
  center: Location;
  radius: number;
}

const CustomCircle = ({
  center,
  radius,
  color = "BLUE",
  properties = {},
  onClick,
  onHover,
  zIndex = 0,
  children,
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
    if (annotationLayerRef.current) {
      annotationLayerRef.current.setZIndex(zIndex);
    }
  }, [zIndex]);

  useEffect(() => {
    annotationRef.current.setStyle(annotationStyleRef.current);

    annotationLayerRef.current = annotationLayerRef.current;
    annotationLayerRef.current = annotationLayerRef.current;
    annotationRef.current.setProperties({
      source: annotationLayerRef.current.getSource(),
      layer: annotationLayerRef.current,
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
      annotationLayerRef.current.getSource()?.clear();
      map.removeLayer(annotationLayerRef.current);
    };
  }, [color, children, map, onHover, properties, onClick]);
  return <></>;
};

export default CustomCircle;
