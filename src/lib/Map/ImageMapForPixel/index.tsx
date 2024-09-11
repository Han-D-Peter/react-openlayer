import { Map, MapBrowserEvent, View } from "ol";
import {
  ReactNode,
  useEffect,
  useId,
  useState,
  useRef,
  useLayoutEffect,
} from "react";
import { defaults as defaultControls } from "ol/control";
import TileLayer from "ol/layer/Tile";
import { ImageStatic, OSM } from "ol/source";
import { fromLonLat } from "ol/proj";
import { Image as OlImage } from "ol/layer";

interface ImageMapForPixelProps {
  /**
   * @default "1000px"
   */
  height?: string;

  imageSrc: string;

  /**
   * @default "1000px"
   */
  width?: string;
  fullscreenControl?: boolean;
  children?: ReactNode;

  onClick?: (pixel: { x: number; y: number }) => void;
}

export function ImageMapForPixel({
  imageSrc,
  width,
  height,
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

  const [imgSize, setImgSize] = useState<{
    width: number;
    height: number;
  } | null>(null);

  if (imagePixel && onClick) {
    onClick(imagePixel);
  }

  function getImageDimensions(src: string) {
    const img = new Image();
    img.onload = function () {
      const width = img.width;
      const height = img.height;
      setImgSize({ width, height });
    };
    img.onerror = function () {
      console.error("이미지 로드 실패", src);
    };
    img.src = src;
  }

  useLayoutEffect(() => {
    getImageDimensions(imageSrc);
  }, [imageSrc]);

  useEffect(() => {
    const mapRef = mapObj.current;

    mapRef.setTarget(mapId);

    function getImagePixel(event: MapBrowserEvent<any>) {
      if (!imgSize) return;
      // 클릭한 포인트의 좌표를 얻음
      var clickedCoordinate = event.coordinate;

      // 포인트 좌표를 픽셀 좌표로 변환
      var clickedPixel = clickedCoordinate;

      const heightdigit = `${imgSize.height}`;
      const heightbycount = heightdigit.length - 2;
      const rightdigit = `${imgSize.width}`;
      const rightbycount = rightdigit.length - 2;
      // 픽셀 좌표 출력

      const xPosition = (clickedPixel[0] * 10 ** rightbycount).toFixed(0);
      const yPosition = (
        imgSize.height -
        clickedPixel[1] * 10 ** heightbycount
      ).toFixed(0);

      if (
        Number(xPosition) <= imgSize.width &&
        Number(yPosition) <= imgSize.height &&
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
  }, [imgSize, mapId]);

  useEffect(() => {
    if (!imgSize) return;
    const mapRef = mapObj.current;

    // image.height는 3648
    const heightdigit = `${imgSize.height}`;
    const heightbycount = heightdigit.length - 2;

    const bottomPosition = Number(
      (imgSize.height / 10 ** heightbycount).toFixed(heightbycount)
    );

    // image.width는 5472
    const rightdigit = `${imgSize.width}`;
    const rightbycount = rightdigit.length - 2;
    const rightPosition = Number(
      (imgSize.width / 10 ** rightbycount).toFixed(rightbycount)
    );

    const imageLayer = new OlImage({
      source: new ImageStatic({
        url: imageSrc,
        imageSize: [imgSize.width, imgSize.height],
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
  }, [imageSrc, imgSize]);

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
