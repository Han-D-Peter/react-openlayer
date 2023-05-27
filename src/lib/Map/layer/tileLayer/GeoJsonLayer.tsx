import { useEffect, useRef } from "react";
import proj4 from "proj4";
import GeoJSON from "ol/format/GeoJSON";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { useMap } from "../../hooks";
import { register } from "ol/proj/proj4";

proj4.defs(
  "EPSG:5185",
  "+proj=tmerc +lat_0=38 +lon_0=125 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs"
);

proj4.defs(
  "EPSG:5186",
  "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs"
);

proj4.defs(
  "EPSG:5187",
  "+proj=tmerc +lat_0=38 +lon_0=129 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs"
);

proj4.defs(
  "EPSG:5188",
  "+proj=tmerc +lat_0=38 +lon_0=131 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs"
);

proj4.defs(
  "EPSG:3857",
  "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"
);

proj4.defs("WGS:84", "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs");

register(proj4);

type Coordinate =
  | "EPSG:5185"
  | "EPSG:5186"
  | "EPSG:5187"
  | "EPSG:5188"
  | "EPSG:3857"
  | "WGS:84";

interface GeoJsonLayerProps {
  geoJson: Record<string, any>;
  projectionCode?: Coordinate;
  zIndex?: number;
}

export default function GeoJsonLayer({
  geoJson,
  zIndex = 1,
  projectionCode = "EPSG:5186",
}: GeoJsonLayerProps) {
  const map = useMap();
  const geoJsonLayer = useRef<VectorLayer<VectorSource> | null>(null);
  const fromProjection = projectionCode;
  const toProjection = "EPSG:3857";

  useEffect(() => {
    if (geoJsonLayer.current) {
      geoJsonLayer.current.setZIndex(zIndex);
    }
  }, [zIndex]);

  useEffect(() => {
    const geoJsonFormat = new GeoJSON();
    const features = geoJsonFormat.readFeatures(geoJson);

    features.forEach((feature) => {
      const geoMetry = feature.getGeometry();
      if (geoMetry) {
        geoMetry.transform(fromProjection, toProjection);
      }
    });

    const vectorSource = new VectorSource({
      features,
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    geoJsonLayer.current = vectorLayer;

    map.addLayer(vectorLayer);
  }, [map, geoJson]);
  return <></>;
}
