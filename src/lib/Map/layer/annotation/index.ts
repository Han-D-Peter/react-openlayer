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
export * from "./ImageMarker";

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
  opacity?: 1 | 0.9 | 0.8 | 0.7 | 0.6 | 0.5 | 0.4 | 0.3 | 0.2 | 0.1;
  children?: ReactElement<InnerTextProps, typeof InnerText> | null;
  isDisabledSelection?: boolean;
}
