import { Feature } from "ol";
import { FeatureLike } from "ol/Feature";
import { Geometry, LineString, MultiPoint, Point, Polygon } from "ol/geom";

export class TileUrl {
  url: string;
  constructor(url: string) {
    this.url = url;
  }

  /**
   * This mehod is for converting tile url
   * @param z z coordination
   * @param x x coordination
   * @param y y coordination
   * @returns
   */
  getUrlFromPosition(z: number, x: number, y: number) {
    const fixedUrl = this.url.replace("{z}/{x}/{y}", `${z}/${x}/${y}`);
    return fixedUrl;
  }
}

export const getProfileFromFeature = (feature: FeatureLike) => {
  const geometry = feature.getGeometry() as Geometry;
  const geometryType = geometry.getType();
  if (geometryType === "Point") {
    return getProfileFromPoint(feature);
  } else if (geometryType === "LineString") {
    return getProfileFromPolyline(feature);
  } else if (geometryType === "Polygon") {
    return getProfileFromPolygon(feature);
  } else if (geometryType === "MultiPoint") {
    return getProfileFromMultiPoint(feature);
  }
  return null;
};

const getProfileFromMultiPoint = (feature: FeatureLike) => {
  const geometry = feature.getGeometry() as MultiPoint;
  return {
    positions: geometry.getCoordinates(),
    properties: geometry.getProperties(),
  };
};
const getProfileFromPoint = (feature: FeatureLike) => {
  const geometry = feature.getGeometry() as Point;
  return {
    positions: geometry.getCoordinates(),
    properties: geometry.getProperties(),
  };
};
const getProfileFromPolyline = (feature: FeatureLike) => {
  const geometry = feature.getGeometry() as LineString;
  return {
    positions: geometry.getCoordinates(),
    properties: geometry.getProperties(),
  };
};

const getProfileFromPolygon = (feature: FeatureLike) => {
  const geometry = feature.getGeometry() as Polygon;
  return {
    positions: geometry.getCoordinates(),
    properties: geometry.getProperties(),
  };
};
