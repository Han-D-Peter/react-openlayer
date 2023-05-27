import { Coordinate } from "ol/coordinate";
import { ANNOTATION_COLOR } from "../../constants/color";
import Feature, { FeatureLike } from "ol/Feature";
import { ReactElement, useEffect, useRef } from "react";
import InnerText, { InnerTextProps } from "../../Text";
import useMap from "../../hooks/incontext/useMap";
import { Polygon } from "ol/geom";
import { fromLonLat } from "ol/proj";
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import { makeText } from "../../utils/object";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Select } from "ol/interaction";
import { click, pointerMove } from "ol/events/condition";
import { SelectEvent } from "ol/interaction/Select";

interface CustomPolygonProps {
  positions: Coordinate[][];
  color?: keyof typeof ANNOTATION_COLOR;
  properties?: Record<string, any>;
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

const CustomPolygon = ({
  positions,
  color = "BLUE",
  properties = {},
  onClick,
  onHover,
  zIndex = 0,
  children,
}: CustomPolygonProps) => {
  const map = useMap();
  const annotationRef = useRef<Feature<Polygon>>(
    new Feature(
      new Polygon([positions[0].map((position) => fromLonLat(position))])
    )
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

    const vectorSource = new VectorSource({
      features: [annotationRef.current],
    });
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    annotationLayerRef.current = vectorLayer;
    annotationRef.current.setProperties({
      source: vectorSource,
      layer: vectorLayer,
    });
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
};

export default CustomPolygon;
