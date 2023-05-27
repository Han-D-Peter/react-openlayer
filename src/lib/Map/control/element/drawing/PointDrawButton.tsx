import { FaMapMarkerAlt } from "react-icons/fa";
import Button, { ButtonProps } from "../Button";
import { useEffect, useRef } from "react";
import { Draw } from "ol/interaction";
import { useMap } from "../../../hooks";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import { makeText } from "../../../utils/object";
import Icon from "ol/style/Icon";
import { DrawEvent } from "ol/interaction/Draw";
import { Geometry } from "ol/geom";
import { Feature } from "ol";

interface PointDrawButtonProps extends ButtonProps {
  onEnd: (feature: Feature<Geometry>) => void;
  onCanvas?: boolean;
}

export default function PointDrawButton({
  onEnd,
  onClick,
  onCanvas = false,
  ...props
}: PointDrawButtonProps) {
  const map = useMap();
  const vectorSourceRef = useRef(new VectorSource());
  const vectorLayerRef = useRef(new VectorLayer());
  const drawRef = useRef(
    new Draw({
      source: vectorSourceRef.current,
      type: "Point",
      style: new Style({
        text: makeText({
          text: "unknown",
          size: 15,
          color: "black",
          outline: true,
          isMarker: true,
        }),
        image: new Icon({
          src: "/mapicon/marker-icon.png", // 마커 이미지 경로
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
        text: makeText({
          text: "unknown",
          size: 15,
          color: "black",
          outline: true,
          isMarker: true,
        }),
        image: new Icon({
          src: "/mapicon/marker-icon.png", // 마커 이미지 경로
          anchor: [0.5, 1], // 마커 이미지의 앵커 위치
        }),
      })
    );
    feature.setProperties({
      source: vectorSourceRef.current,
      layer: vectorLayerRef.current,
    });
    map.removeInteraction(drawRef.current);
    onEnd(feature);
  };

  useEffect(() => {
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
      <FaMapMarkerAlt />
    </Button>
  );
}
