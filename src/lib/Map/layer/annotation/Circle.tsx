import { ReactElement, forwardRef, useEffect, useRef } from "react";
import { Feature, MapBrowserEvent } from "ol";
import Circle from "ol/geom/Circle";
import VectorLayer from "ol/layer/Vector";
import Style from "ol/style/Style";
import VectorSource from "ol/source/Vector";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import { fromLonLat } from "ol/proj";
import { FeatureLike } from "ol/Feature";

import useMap from "../../hooks/useMap";
import { Location } from "../..";
import { ANNOTATION_COLOR } from "../../constants/color";
import InnerText, { InnerTextProps } from "../../Text";
import { makeText } from "../../utils/object";

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
    children,
  }: CustomCircleProps) => {
    const map = useMap();
    const annotationRef = useRef<Feature<Circle>>(
      new Feature(new Circle(fromLonLat(center), radius))
    );

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

      map.addLayer(vectorLayer);

      return () => {
        map.removeLayer(vectorLayer);
      };
    }, [color, children, map]);

    useEffect(() => {
      if (!map) return;
      let clicker: FeatureLike | null = null;
      const clickAnnotation = (event: MapBrowserEvent<any>) => {
        map.forEachFeatureAtPixel(event.pixel, function (f) {
          clicker = f;
          return true;
        });
        if (clicker && onClick) {
          onClick({
            annotation: clicker,
            properties,
          });
        }
      };
      map.on("click", clickAnnotation);
      return () => {
        map.un("click", clickAnnotation);
      };
    }, [map, onClick, properties]);

    useEffect(() => {
      if (!map) return;
      let hover: FeatureLike | null = null;
      const hoverAnnotation = (event: MapBrowserEvent<any>) => {
        map.getTargetElement().style.cursor = map.hasFeatureAtPixel(event.pixel)
          ? "pointer"
          : "";
        if (hover !== null) {
          hover = null;
        }
        map.forEachFeatureAtPixel(event.pixel, function (f) {
          hover = f;
          return true;
        });
        if (hover && onHover) {
          onHover({
            annotation: hover,
            properties,
          });
        }
      };
      map.on("pointermove", hoverAnnotation);
      return () => {
        map.un("pointermove", hoverAnnotation);
      };
    }, [map, onHover, properties]);

    return <></>;
  }
);
export default CustomCircle;
