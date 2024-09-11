import { Map, MapBrowserEvent, View } from "ol";
import { ReactNode, useEffect, useId, useState, useRef } from "react";
import { defaults as defaultControls } from "ol/control";
import TileLayer from "ol/layer/Tile";
import { ImageStatic, OSM } from "ol/source";
import { fromLonLat } from "ol/proj";
import { Image } from "ol/layer";

interface ImageMapForPixelProps {
  /**
   * @default "1000px"
   */
  height?: string;

  image: {
    src: string;
    width: number;
    height: number;
  };

  /**
   * @default "1000px"
   */
  width?: string;
  fullscreenControl?: boolean;
  children?: ReactNode;

  onClick?: (pixel: { x: number; y: number }) => void;
}

export function ImageMapForPixel({
  height,
  image,
  width,
  fullscreenControl,
  children,
  onClick,
}: ImageMapForPixelProps) {
  const id = useId();
  const mapId = `react-openlayers-map-${id}`;
  const mapObj = useRef<Map>(
    new Map({
      view: new View({
        center: fromLonLat([0, 0]),
      }),
      controls: defaultControls({
        zoom: false,
        rotate: true,
      }).extend([]),
      layers: [
        new TileLayer({
          source: new OSM({
            crossOrigin: "anonymous",
          }),
        }),
      ],
    })
  );

  const [imagePixel, setImagePixel] = useState<{ x: number; y: number } | null>(
    null
  );

  if (imagePixel && onClick) {
    onClick(imagePixel);
  }

  useEffect(() => {
    const mapRef = mapObj.current;

    mapRef.setTarget(mapId);

    function getImagePixel(event: MapBrowserEvent<any>) {
      // 클릭한 포인트의 좌표를 얻음
      var clickedCoordinate = event.coordinate;

      // 포인트 좌표를 픽셀 좌표로 변환
      var clickedPixel = clickedCoordinate;

      const heightdigit = `${image.height}`;
      const heightbycount = heightdigit.length - 2;
      const rightdigit = `${image.width}`;
      const rightbycount = rightdigit.length - 2;
      // 픽셀 좌표 출력

      const xPosition = (clickedPixel[0] * 10 ** rightbycount).toFixed(0);
      const yPosition = (
        image.height -
        clickedPixel[1] * 10 ** heightbycount
      ).toFixed(0);

      if (
        Number(xPosition) <= image.width &&
        Number(yPosition) <= image.height &&
        Number(xPosition) > 0 &&
        Number(yPosition) > 0
      ) {
        setImagePixel({
          x: Number(xPosition),
          y: Number(yPosition),
        });
      }
    }

    mapRef.on("click", getImagePixel);

    return () => {
      mapRef.setTarget(undefined);
      mapRef.setLayers([]);
      mapRef.un("click", getImagePixel);
    };
  }, [image.height, image.width, mapId]);

  useEffect(() => {
    const mapRef = mapObj.current;

    // image.height는 3648
    const heightdigit = `${image.height}`;
    const heightbycount = heightdigit.length - 2;

    const bottomPosition = Number(
      (image.height / 10 ** heightbycount).toFixed(heightbycount)
    );

    // image.width는 5472
    const rightdigit = `${image.width}`;
    const rightbycount = rightdigit.length - 2;
    const rightPosition = Number(
      (image.width / 10 ** rightbycount).toFixed(rightbycount)
    );

    const imageLayer = new Image({
      source: new ImageStatic({
        url: image.src,
        imageSize: [image.width, image.height],
        imageExtent: [0, 0, rightPosition, bottomPosition],
      }),
    });

    mapRef.addLayer(imageLayer);
    mapRef.getView().fit(imageLayer.getSource()?.getImageExtent()!, {
      duration: 1000, // 애니메이션 지속 시간 (밀리초)
    });
    return () => {
      mapRef.removeLayer(imageLayer);
    };
  }, [image]);

  return (
    <div
      id={mapId}
      className="react-openlayers-map-container"
      style={{ width, height }}
    >
      {children}
    </div>
  );
}
