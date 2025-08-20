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

const createProfile = <T extends Geometry>(feature: FeatureLike) => {
  const geometry = feature.getGeometry() as T;
  return {
    positions: geometry.getCoordinates(),
    properties: feature.getProperties(),
  };
};

export const getProfileFromMultiPoint = (feature: FeatureLike) =>
  createProfile<MultiPoint>(feature);
export const getProfileFromPoint = (feature: FeatureLike) =>
  createProfile<Point>(feature);
export const getProfileFromPolyline = (feature: FeatureLike) =>
  createProfile<LineString>(feature);
export const getProfileFromPolygon = (feature: FeatureLike) =>
  createProfile<Polygon>(feature);

export const getProfileFromFeature = (feature: FeatureLike) => {
  const geometry = feature.getGeometry();
  const geometryType = geometry?.getType();
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
