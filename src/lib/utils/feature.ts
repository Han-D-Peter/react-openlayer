import { Feature } from "ol";
import { Coordinate } from "ol/coordinate";
import { Geometry, MultiPoint } from "ol/geom";
import { Circle, Fill, Stroke, Style } from "ol/style";
import { ANNOTATION_COLOR } from "../Map/constants";
import { makeText } from "../Map";

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
            color: ANNOTATION_COLOR["SELECT"].stroke, // 원의 색상
          }),
          stroke: new Stroke({
            color: ANNOTATION_COLOR["SELECT"].stroke, // 테두리 선의 색상
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
