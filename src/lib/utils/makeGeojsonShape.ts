import { uniqueId } from "lodash";
import { Coordinate } from "ol/coordinate";

export type GeometryType = "Point" | "MultiPoint" | "LineString" | "Polygon";

export type PointGeometry = {
  type: "Point";
  coordinates: Coordinate;
};

export type Geometry = {
  type: Omit<GeometryType, "Point">;
  coordinates: Coordinate[];
};

export type MakeGeojsonShape = PointGeometry | Geometry;

type MakeGeojsonShapeArgs = MakeGeojsonShape;

type makeGeojsonShapeProperties = Record<string, unknown>;

export function makeGeojsonShape(
  { type, coordinates }: MakeGeojsonShapeArgs,
  properties: makeGeojsonShapeProperties
) {
  return {
    type: "Feature",
    id: uniqueId(),
    geometry: {
      type,
      coordinates,
    },
    properties,
  };
}
