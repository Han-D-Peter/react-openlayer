import React, { useId } from "react";
import { Button, ButtonProps } from "../Button";
import { useEffect, useRef } from "react";
import { Draw, Snap } from "ol/interaction";
import { useFeatureStore, useMap } from "../../../hooks";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import { makeText } from "../../../utils/object";
import { DrawEvent, createBox } from "ol/interaction/Draw";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import Icon from "ol/style/Icon";
import { Geometry, Polygon } from "ol/geom";
import { Feature } from "ol";
import { RectangleIcon } from "../../../constants/icons/RectangleIcon";
import { useControlSection } from "../../layout";
import { InnerButton } from "../InnerButton";
import useDrawSource from "src/lib/Map/hooks/incontext/useDrawSource";
import { ANNOTATION_COLOR } from "src/lib/Map/constants";

export interface RectangleDrawButtonProps extends ButtonProps {
  /**
   * @description You can get Multipoint feature what was made by callback function.
   */
  onEnd?: (features: Feature<Geometry>) => void;

  /**
   * @description You can set callback Fn on 'start' event.
   */
  onStart?: () => void;
  /**
   * @default false
   * @description Well... Sometimes you need this drawing tool with using server waht containes DB. if 'onCanvas' set false, react-openlayer will not draw feature on canvas.
   */
  onCanvas?: boolean;
  color?: keyof typeof ANNOTATION_COLOR;
}

export function RectangleDrawButton({
  onEnd,
  onClick,
  onCanvas = false,
  onStart,
  color = "BLUE",
  ...props
}: RectangleDrawButtonProps) {
  const map = useMap();
  const id = useId();
  const buttonId = `controlbutton-${id}`;
  const { selectButton, selectedButtonId } = useControlSection();
  const { selectFeature } = useFeatureStore();
  const isActive = buttonId === selectedButtonId;
  const { drawVectorSource } = useDrawSource();
  const vectorLayerRef = useRef(new VectorLayer({ zIndex: 1 }));
  const drawRef = useRef(
    new Draw({
      source: onCanvas ? drawVectorSource : undefined,
      type: "Circle",
      geometryFunction: createBox(),
      style: new Style({
        stroke: new Stroke({
          color: ANNOTATION_COLOR[color].stroke(1),
          width: 2,
        }),
        fill: new Fill({
          color: ANNOTATION_COLOR[color].fill(1),
        }),
      }),
    })
  );

  useEffect(() => {
    drawRef.current = new Draw({
      source: onCanvas ? drawVectorSource : undefined,
      type: "Circle",
      geometryFunction: createBox(),
      style: new Style({
        stroke: new Stroke({
          color: ANNOTATION_COLOR[color].stroke(1),
          width: 2,
        }),
        fill: new Fill({
          color: ANNOTATION_COLOR[color].fill(1),
        }),
      }),
    });
  }, [onCanvas, color, drawVectorSource]);

  const startDrawing = () => {
    if (onClick) {
      onClick();
    }

    if (onStart) {
      onStart();
    }
    map.getViewport().style.cursor = "crosshair";
    map.setProperties({ isDrawing: true });
    map.addInteraction(drawRef.current);
  };

  const drawing = (event: DrawEvent) => {
    const geometry = event.feature.getGeometry() as Polygon;
    // openlayers 가 사각형을 그릴때 4점이 아니라 5점을 그리는 부분 있어서 수정
    const coord = geometry.getCoordinates()[0];
    // coord.pop();
    geometry.setCoordinates([coord]);

    event.feature.setStyle(
      new Style({
        stroke: new Stroke({
          color: ANNOTATION_COLOR[color].stroke(1),
          width: 2,
        }),
        fill: new Fill({
          color: ANNOTATION_COLOR[color].fill(0.1),
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
    event.feature.setProperties({
      shape: "Rectangle",
      isModifying: false,
      source: drawVectorSource,
      layer: vectorLayerRef.current,
      positions: geometry.getCoordinates(),
    });
    selectButton("");
    map.getViewport().style.cursor = "pointer";
    map.removeInteraction(drawRef.current);

    if (onEnd) {
      onEnd(event.feature);
    }
    if (onCanvas) {
      selectFeature(event.feature);
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
      popupText="Rectangle"
      onClick={() => {
        if (isActive) {
          selectButton("");
          map.setProperties({ isDrawing: false });
          map.getViewport().style.cursor = "pointer";
        } else {
          selectButton(buttonId);
          startDrawing();
        }
      }}
      isActive={isActive}
      {...props}
    >
      <InnerButton isActive={isActive}>
        <RectangleIcon size={26} color={isActive ? "white" : "black"} />
      </InnerButton>
    </Button>
  );
}
