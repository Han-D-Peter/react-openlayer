import { ReactElement, forwardRef, useEffect, useRef } from "react";
import { Feature } from "ol";
import Circle from "ol/geom/Circle";
import VectorLayer from "ol/layer/Vector";
import Style from "ol/style/Style";
import VectorSource from "ol/source/Vector";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import { fromLonLat } from "ol/proj";
import { FeatureLike } from "ol/Feature";

import useMap from "../../hooks/incontext/useMap";
import { Location } from "../..";
import { ANNOTATION_COLOR } from "../../constants/color";
import InnerText, { InnerTextProps } from "../../Text";
import { makeText } from "../../utils/object";
import { Select } from "ol/interaction";
import { click, pointerMove } from "ol/events/condition";
import { SelectEvent } from "ol/interaction/Select";

interface CustomCircleProps {
  center: Location;
  radius: number;
  color?: keyof typeof ANNOTATION_COLOR;
  properties?: { [key: string]: string | number };
  onClick?: (event: {
    annotation: FeatureLike;
    properties: Record<string, any>;
  }) => void;
  onHover?: (event: {
    annotation: FeatureLike;
    properties: Record<string, any>;
  }) => void;
  zIndex?: number;
  children?: ReactElement<InnerTextProps, typeof InnerText>;
}

const CustomCircle = forwardRef(
  ({
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

    const annotationLayerRef = useRef<VectorLayer<VectorSource> | null>(null);

    useEffect(() => {
      if (annotationLayerRef.current) {
        annotationLayerRef.current.setZIndex(zIndex);
      }
    }, [zIndex]);

    useEffect(() => {
      annotationRef.current.setStyle(
        new Style({
          stroke: new Stroke({
            color: ANNOTATION_COLOR[color].stroke,
            width: 2,
          }),
          fill: new Fill({
            color: ANNOTATION_COLOR[color].fill,
          }),
          text: makeText({
            text: children ? children.props.children : "",
            size: children?.props.size || 15,
            color: children?.props.color ? children.props.color : "black",
            outline: children?.props.outline,
          }),
        })
      );
      const vectorLayer = new VectorLayer({
        source: new VectorSource({
          features: [annotationRef.current],
        }),
      });

      annotationLayerRef.current = vectorLayer;

      vectorLayer.setZIndex(zIndex);

      const clickSelect = new Select({
        condition: click,
        style: null,
        layers: [vectorLayer],
      });

      const hoverSelect = new Select({
        condition: pointerMove,
        style: null,
        layers: [vectorLayer],
      });

      map.addInteraction(hoverSelect);
      map.addInteraction(clickSelect);
      map.addLayer(vectorLayer);

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
      hoverSelect.on("select", onHoverHandler);
      clickSelect.on("select", onClickHandler);

      return () => {
        hoverSelect.un("select", onHoverHandler);
        clickSelect.un("select", onClickHandler);
        map.removeInteraction(hoverSelect);
        map.removeInteraction(clickSelect);
        map.removeLayer(vectorLayer);
      };
    }, [color, children, map, onHover, properties, onClick]);

    return <></>;
  }
);
export default CustomCircle;
