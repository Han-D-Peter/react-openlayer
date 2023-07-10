import React from "react";
import { Button, ButtonProps } from "../Button";
import { useEffect, useRef } from "react";
import { Draw } from "ol/interaction";
import { useMap } from "../../../hooks";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import { DrawEvent } from "ol/interaction/Draw";
import Fill from "ol/style/Fill";
import Text from "ol/style/Text";
import Stroke from "ol/style/Stroke";
import { Geometry, Point } from "ol/geom";
import { Feature } from "ol";
import { TextIcon } from "../../../constants/icons/TextIcon";

export interface TextDrawButtonProps extends ButtonProps {
  /**
   * @description You can get Multipoint feature what was made by callback function.
   */
  onEnd?: (features: Feature<Geometry>) => void;

  /**
   * @default false
   * @description Well... Sometimes you need this drawing tool with using server waht containes DB. if 'onCanvas' set false, react-openlayer will not draw feature on canvas.
   */
  onCanvas?: boolean;
}

export function TextDrawButton({
  onEnd,
  onClick,
  onCanvas = false,
  ...props
}: TextDrawButtonProps) {
  const map = useMap();
  const vectorSourceRef = useRef(new VectorSource());
  const vectorLayerRef = useRef(new VectorLayer());
  const drawRef = useRef(
    new Draw({
      source: vectorSourceRef.current,
      type: "Point",
      style: new Style({
        text: new Text({
          text: "unknown",
          font: "15px Arial",
          fill: new Fill({
            color: "black",
          }),
          overflow: true,
          offsetX: 0,
          offsetY: -15,
          stroke: new Stroke({
            color: "white",
            width: 3,
          }),
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
    const geometry = feature.getGeometry() as Point;
    feature.setStyle(
      new Style({
        text: new Text({
          text: "unknown",
          font: "15px Arial",
          fill: new Fill({
            color: "black",
          }),
          overflow: true,
          offsetX: 0,
          offsetY: -15,
          stroke: new Stroke({
            color: "white",
            width: 3,
          }),
        }),
      })
    );
    feature.setProperties({
      shape: "TextMarker",
      isModifying: false,
      source: vectorSourceRef.current,
      layer: vectorLayerRef.current,
      positions: geometry.getCoordinates(),
    });
    map.removeInteraction(drawRef.current);
    if (onEnd) {
      onEnd(feature);
    }
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
      <TextIcon />
    </Button>
  );
}
