import { FeatureLike } from "ol/Feature";
import { ANNOTATION_COLOR } from "../../constants";
import { ReactElement } from "react";
import InnerText, { InnerTextProps } from "../../Text";

export { default as CustomCircle } from "./Circle";
export { default as CustomMarker } from "./Marker";
export { default as CustomMultiPoint } from "./MultiPoint";
export { default as CustomPolygon } from "./Polygon";
export { default as CustomPolyLine } from "./PolyLine";
export { default as CustomRectangle } from "./Rectangle";
export { default as CustomTextMarker } from "./TextMarker";

export interface Annotation {
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
  children?: ReactElement<InnerTextProps, typeof InnerText> | null;
}
