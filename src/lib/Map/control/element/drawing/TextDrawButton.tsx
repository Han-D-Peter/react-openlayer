import React, { useId } from "react";
import { Button, ButtonProps } from "../Button";
import { useEffect, useRef } from "react";
import { Draw, Snap } from "ol/interaction";
import { useFeatureStore, useMap } from "../../../hooks";
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
import { useControlSection } from "../../layout";
import { RxText } from "react-icons/rx";
import { InnerButton } from "../InnerButton";
import useDrawSource from "src/lib/Map/hooks/incontext/useDrawSource";

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
  const id = useId();
  const buttonId = `controlbutton-${id}`;
  const { selectButton, selectedButtonId } = useControlSection();
  const isActive = buttonId === selectedButtonId;
  const { selectFeature } = useFeatureStore();
  const { drawVectorSource } = useDrawSource();
  const vectorLayerRef = useRef(new VectorLayer({ zIndex: 1 }));
  const drawRef = useRef(
    new Draw({
      source: onCanvas ? drawVectorSource : undefined,
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

  useEffect(() => {
    drawRef.current = new Draw({
      source: onCanvas ? drawVectorSource : undefined,
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
    });
  }, [onCanvas]);

  const startDrawing = () => {
    if (onClick) {
      onClick();
    }
    map.setProperties({ isDrawing: true });
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
      source: drawVectorSource,
      layer: vectorLayerRef.current,
      positions: geometry.getCoordinates(),
    });
    selectButton("");
    map.removeInteraction(drawRef.current);
    if (onEnd) {
      onEnd(feature);
    }
    if (onCanvas) {
      selectFeature(feature);
    }
    setTimeout(() => map.setProperties({ isDrawing: false }), 100);
  };

  useEffect(() => {
    const drawingInstance = drawRef.current;
    drawingInstance.on("drawend", drawing);

    return () => {
      drawingInstance.un("drawend", drawing);
    };
  }, []);

  useEffect(() => {
    if (!isActive) {
      map.removeInteraction(drawRef.current);
    }
    const snap = new Snap({
      source: drawVectorSource,
    });
    map.addInteraction(snap);
    return () => {
      map.removeInteraction(snap);
    };
  }, [isActive, map]);

  useEffect(() => {
    vectorLayerRef.current.setSource(drawVectorSource);
    if (onCanvas) {
      map.addLayer(vectorLayerRef.current);
    } else {
      map.removeLayer(vectorLayerRef.current);
    }
  }, [onCanvas, map]);

  return (
    <Button
      id={buttonId}
      hasPopup
      popupText="Text"
      onClick={() => {
        if (isActive) {
          selectButton("");
        } else {
          selectButton(buttonId);
          startDrawing();
        }
      }}
      isActive={isActive}
      {...props}
    >
      <InnerButton isActive={isActive}>
        <RxText size={24} color={isActive ? "white" : "black"} />
      </InnerButton>
    </Button>
  );
}
