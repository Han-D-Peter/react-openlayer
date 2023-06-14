import { FeatureLike } from "ol/Feature";
import { ANNOTATION_COLOR } from "../../constants";
import { ReactElement } from "react";
import { InnerText, InnerTextProps } from "../../Text";

export * from "./Circle";
export * from "./Marker";
export * from "./MultiPoint";
export * from "./Polygon";
export * from "./PolyLine";
export * from "./Rectangle";
export * from "./TextMarker";

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
