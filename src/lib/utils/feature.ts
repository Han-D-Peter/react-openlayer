import { Feature, Map } from "ol";
import { Coordinate } from "ol/coordinate";
import { Geometry, LineString, MultiPoint, Point, Polygon } from "ol/geom";
import { Circle, Fill, Stroke, Style } from "ol/style";
import { ANNOTATION_COLOR } from "../Map/constants";
import { makeText, toLonLat } from "../Map";

export const makeSelectedFeature = (nomalizedCoordinates: Coordinate[]) => {
  const multiPointGeometry = new MultiPoint(nomalizedCoordinates);

  const features = multiPointGeometry
    .getPoints()
    .map((point, index): Feature<Geometry> => {
      const text = index + 1; // 순번 설정
      const style = new Style({
        image: new Circle({
          radius: 10,
          fill: new Fill({
            color: ANNOTATION_COLOR["SELECT"].stroke(), // 원의 색상
          }),
          stroke: new Stroke({
            color: ANNOTATION_COLOR["SELECT"].stroke(), // 테두리 선의 색상
            width: 2,
          }),
        }),
        text: makeText({
          text: String(text),
          size: 15,
          color: "black",
          outline: true,
          isMarker: false,
        }),
        zIndex: 1000,
      });
      style.getText().setText(text.toString());
      const pointFeature = new Feature(point);
      pointFeature.setStyle(style);

      return pointFeature;
    });

  return features;
};

export const positionsFromFeature = (
  feature: Feature<Geometry>,
  lonlat?: boolean
) => {
  const geometry = feature.getGeometry();
  if (geometry instanceof Polygon) {
    if (lonlat) {
      return geometry
        .getCoordinates()
        .map((group) => group.map((coord) => toLonLat(coord)));
    }
    return geometry.getCoordinates();
  }
  if (geometry instanceof LineString) {
    if (lonlat) {
      return geometry.getCoordinates().map((coord) => toLonLat(coord));
    }
    return geometry.getCoordinates();
  }
  if (geometry instanceof Point) {
    if (lonlat) {
      return toLonLat(geometry.getFirstCoordinate());
    }
    return geometry.getFirstCoordinate();
  }
  if (geometry instanceof MultiPoint) {
    if (lonlat) {
      return toLonLat(geometry.getFirstCoordinate());
    }
    return geometry.getFirstCoordinate();
  }
};

export const positionsFromMultiPointFeatures = (
  features: Feature<Geometry>[]
) => {
  return features.map((feat) => positionsFromFeature(feat));
};

export function fitFeatureToView(map: Map, feature: Feature<Geometry>) {
  const geometry = feature.getGeometry();
  if (!geometry) return;

  const extent = geometry.getExtent();

  map.getView().fit(extent, {
    padding: [200, 200, 200, 200],
    duration: 500,
  });
}
