import React from "react";
import { useEffect, useRef, useState } from "react";
import { Draw } from "ol/interaction";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import { DrawEvent } from "ol/interaction/Draw";
import { Feature } from "ol";
import { Geometry, Point } from "ol/geom";
import { Text, Fill, Stroke, Circle } from "ol/style";
import { ANNOTATION_COLOR } from "../../../constants/color";
import { useMap } from "../../../hooks";
import { Button, ButtonProps } from "../Button";
import { MultiPointIcon } from "../../../constants/icons/MultiPointIcon";

export interface MultiPointDrawButtonProps extends ButtonProps {
  /**
   * @description You can get Multipoint feature what was made by callback function.
   */
  onEnd?: (features: Feature<Geometry>[]) => void;

  /**
   * @description You can set callback Fn on 'start' event.
   */
  onStart?: () => void;

  /**
   * @default false
   * @description Well... Sometimes you need this drawing tool with using server waht containes DB. if 'onCanvas' set false, react-openlayer will not draw feature on canvas.
   */
  onCanvas?: boolean;
}

export function MultiPointDrawButton({
  onEnd,
  onClick,
  onCanvas = false,
  onStart,
  ...props
}: MultiPointDrawButtonProps) {
  const map = useMap();
  const vectorSourceRef = useRef(new VectorSource());
  const vectorLayerRef = useRef(
    new VectorLayer({
      zIndex: 1,
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
  // const [pointCount, setPointCount] = useState(1);

  const startDrawing = () => {
    setIsDrawing(true);
    if (onClick) {
      onClick();
    }

    if (onStart) {
      onStart();
    }
    map.setProperties({ isDrawing: true });
    map.addInteraction(drawRef.current);
  };

  const drawing = (event: DrawEvent) => {
    const feature = event.feature;
    const geometry = feature.getGeometry() as Point;
    feature.setProperties({
      shape: "MultiPoint",
      isModifying: false,
      source: vectorSourceRef.current,
      layer: vectorLayerRef.current,
      positions: geometry.getCoordinates(),
    });
    setFeatures([...features, feature]);
  };

  const completeDrawing = () => {
    if (onEnd) {
      onEnd(features);
    }
    if (!onCanvas) {
      vectorSourceRef.current.clear();
    }
    setFeatures([]);
    map.removeInteraction(drawRef.current);
    setTimeout(() => map.setProperties({ isDrawing: false }), 100);
    setIsDrawing(false);
  };

  useEffect(() => {
    const drawingInstance = drawRef.current;

    drawingInstance.on("drawend", drawing);

    return () => {
      drawingInstance.un("drawend", drawing);
    };
  }, [features]);

  useEffect(() => {
    if (!props.isActive) {
      map.removeInteraction(drawRef.current);
    }
  }, [props.isActive, map]);

  useEffect(() => {
    map.addLayer(vectorLayerRef.current);
  }, [map]);

  useEffect(() => {
    features.forEach((feature, index) => {
      const style = new Style({
        image: new Circle({
          radius: 10,
          fill: new Fill({
            color: ANNOTATION_COLOR.BLUE.fill(1), // 원의 색상
          }),
          stroke: new Stroke({
            color: ANNOTATION_COLOR.BLUE.stroke, // 테두리 선의 색상
            width: 2,
          }),
        }),
        text: new Text({
          text: String(1 + index), // 포인트의 순번 값을 텍스트로 표시
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
  }, [features]);

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
      <MultiPointIcon />
    </Button>
  );
}
