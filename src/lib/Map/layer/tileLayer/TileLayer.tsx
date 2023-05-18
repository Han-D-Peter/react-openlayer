import { useEffect } from "react";
import { useMap } from "../../hooks";
import { XYZ } from "ol/source";
import OlTileLayer from "ol/layer/Tile";
import { TileUrl } from "../../utils/utils";

interface TileLayerProps {
  url: string;
  zIndex?: number;
  maxZoom?: number;
  minZoom?: number;
  errorTileUrl?: string;
}

const TileLayer = ({
  url,
  zIndex = 0,
  maxZoom = 42,
  minZoom = 0,
}: TileLayerProps) => {
  const map = useMap();

  useEffect(() => {
    const customTmsSource = new XYZ({
      maxZoom,
      minZoom,
      tileUrlFunction: (tileCoord) => {
        const tileUrl = new TileUrl(url);
        const z = tileCoord[0];
        const x = tileCoord[1];
        const y = Math.pow(2, z) - tileCoord[2] - 1;
        return tileUrl.getUrlFromPosition(z, x, y);
      },
    });

    const customTmsLayer = new OlTileLayer({
      source: customTmsSource,
      zIndex,
    });

    map.addLayer(customTmsLayer);
  }, [map]);
  return <></>;
};

export default TileLayer;
