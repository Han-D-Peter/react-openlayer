import Button, { ButtonProps } from "../Button";
import { useEffect, useRef } from "react";
import { Draw } from "ol/interaction";
import { useMap } from "../../../hooks";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import { makeText } from "../../../utils/object";
import { DrawEvent } from "ol/interaction/Draw";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import { MdPolyline } from "react-icons/md";
import Icon from "ol/style/Icon";
import { TbPolygon } from "react-icons/tb";

interface PolygonDrawButtonProps extends ButtonProps {
  onEnd: (feature: DrawEvent) => void;
  onCanvas?: boolean;
}

export default function PolygonDrawButton({
  onEnd,
  onClick,
  onCanvas = false,
  ...props
}: PolygonDrawButtonProps) {
  const map = useMap();
  const vectorSourceRef = useRef(new VectorSource());
  const vectorLayerRef = useRef(new VectorLayer());
  const drawRef = useRef(
    new Draw({
      source: vectorSourceRef.current,
      type: "Polygon",
      style: new Style({
        stroke: new Stroke({
          color: "rgb(2, 26, 255)",
          width: 2,
        }),
        fill: new Fill({
          color: "rgba(2, 26, 255, 0.3)",
        }),
        image: new Icon({
          src: "/mapicon/polygon.svg", // 마커 이미지 경로
          anchor: [0.5, 1], // 마커 이미지의 앵커 위치
        }),
      }),
    })
  );
  const startDrawing = () => {
    if (onClick) {
      onClick();
    }
    map.addInteraction(drawRef.current);
  };

  const drawing = (event: DrawEvent) => {
    const feature = event.feature;
    feature.setStyle(
      new Style({
        stroke: new Stroke({
          color: "rgb(2, 26, 255)",
          width: 2,
        }),
        fill: new Fill({
          color: "rgba(2, 27, 255, 0.1)",
        }),
        text: makeText({
          text: "unknown",
          size: 15,
          color: "black",
          outline: true,
          isMarker: true,
        }),
      })
    );
    feature.setProperties({
      source: vectorSourceRef.current,
      layer: vectorLayerRef.current,
    });
    map.removeInteraction(drawRef.current);
    onEnd(event);
  };

  useEffect(() => {
    const vectorLayer = new VectorLayer({
      source: vectorSourceRef.current,
    });
    map.addLayer(vectorLayer);
    const drawingInstance = drawRef.current;
    drawingInstance.on("drawend", drawing);
    return () => {
      drawingInstance.un("drawend", drawing);
    };
  }, []);

  useEffect(() => {
    if (!props.isActive) {
      map.removeInteraction(drawRef.current);
    }
  }, [props.isActive, map]);

  useEffect(() => {
    vectorLayerRef.current.setSource(vectorSourceRef.current);
    if (onCanvas) {
      map.addLayer(vectorLayerRef.current);
    } else {
      map.removeLayer(vectorLayerRef.current);
    }
  }, [onCanvas, map]);

  return (
    <Button onClick={startDrawing} {...props}>
      <TbPolygon />
    </Button>
  );
}
