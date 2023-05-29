import { useEffect, useRef, useState } from "react";
import { TbMapPins } from "react-icons/tb";
import { Draw } from "ol/interaction";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import { DrawEvent } from "ol/interaction/Draw";
import { Feature } from "ol";
import { Geometry } from "ol/geom";
import { Text, Fill, Stroke, Circle } from "ol/style";
import { ANNOTATION_COLOR } from "src/lib/Map/constants/color";
import { useMap } from "../../../hooks";
import Button, { ButtonProps } from "../Button";

interface MultiPointDrawButtonProps extends ButtonProps {
  /**
   * @description You can get Multipoint feature what was made by callback function.
   */
  onEnd?: (features: Feature<Geometry>[]) => void;

  /**
   * @default false
   * @description Well... Sometimes you need this drawing tool with using server waht containes DB. if 'onCanvas' set false, react-openlayer will not draw feature on canvas.
   */
  onCanvas?: boolean;
}

export default function MultiPointDrawButton({
  onEnd,
  onClick,
  onCanvas = false,
  ...props
}: MultiPointDrawButtonProps) {
  const map = useMap();
  const vectorSourceRef = useRef(new VectorSource());
  const vectorLayerRef = useRef(
    new VectorLayer({
      source: vectorSourceRef.current,
    })
  );
  const drawRef = useRef(
    new Draw({
      source: vectorSourceRef.current,
      type: "MultiPoint",
    })
  );

  const [features, setFeatures] = useState<Feature<Geometry>[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  console.log("isDrawing", isDrawing);
  const [pointCount, setPointCount] = useState(0);

  const startDrawing = () => {
    setIsDrawing(true);
    if (onClick) {
      onClick();
    }
    map.addInteraction(drawRef.current);
  };

  const drawing = (event: DrawEvent) => {
    const feature = event.feature;
    feature.setProperties({
      source: vectorSourceRef.current,
      layer: vectorLayerRef.current,
    });
    setFeatures([...features, feature]);
    setPointCount(prev => prev + 1);
  };

  const completeDrawing = () => {
    if (onEnd) {
      onEnd(features);
    }
    setFeatures([]);
    map.removeInteraction(drawRef.current);
    setIsDrawing(false);
    setPointCount(0);
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
    if (onCanvas) {
      map.addLayer(vectorLayerRef.current);
    } else {
      map.removeLayer(vectorLayerRef.current);
    }
  }, [onCanvas, map]);

  useEffect(() => {
    features.forEach((feature, index) => {
      const style = new Style({
        image: new Circle({
          radius: 10,
          fill: new Fill({
            color: ANNOTATION_COLOR.BLUE.fill, // 원의 색상
          }),
          stroke: new Stroke({
            color: ANNOTATION_COLOR.BLUE.stroke, // 테두리 선의 색상
            width: 2,
          }),
        }),
        text: new Text({
          text: String(pointCount + index), // 포인트의 순번 값을 텍스트로 표시
          font: "bold 15px sans-serif",
          textAlign: "center",

          fill: new Fill({
            color: "#000",
          }),
          stroke: new Stroke({
            color: "#fff",
            width: 3,
          }),
        }),
      });
      feature.setStyle(style);
    });
  }, [features, pointCount]);

  return (
    <Button
      onClick={() => {
        if (!isDrawing) {
          startDrawing();
        } else {
          completeDrawing();
        }
      }}
      {...props}
    >
      <TbMapPins />
    </Button>
  );
}
