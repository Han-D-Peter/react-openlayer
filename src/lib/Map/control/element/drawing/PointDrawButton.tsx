import React, { useId } from "react";
import { Button, ButtonProps } from "../Button";
import { useEffect, useRef } from "react";
import { Draw } from "ol/interaction";
import { useFeatureStore, useMap } from "../../../hooks";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import { icon, makeText } from "../../../utils/object";
import Icon from "ol/style/Icon";
import { DrawEvent } from "ol/interaction/Draw";
import { Geometry, Point } from "ol/geom";
import { Feature } from "ol";
import { PointIcon } from "../../../constants/icons/PointIcon";
import { useControlSection } from "../../layout";
import { InnerButton } from "../InnerButton";

export interface PointDrawButtonProps extends ButtonProps {
  /**
   * @description You can get Multipoint feature what was made by callback function.
   */
  onEnd: (feature: Feature<Geometry>) => void;

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

export function PointDrawButton({
  onEnd,
  onClick,
  onCanvas = false,
  onStart,
  ...props
}: PointDrawButtonProps) {
  const map = useMap();
  const id = useId();
  const buttonId = `controlbutton-${id}`;
  const { selectButton, selectedButtonId } = useControlSection();
  const isActive = buttonId === selectedButtonId;
  const { selectFeature } = useFeatureStore();
  const vectorSourceRef = useRef(new VectorSource());
  const vectorLayerRef = useRef(new VectorLayer({ zIndex: 1 }));
  const drawRef = useRef(
    new Draw({
      source: onCanvas ? vectorSourceRef.current : undefined,
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
          scale: 0.07,
          src: icon.marker, // 마커 이미지 경로
          anchor: [0.5, 1], // 마커 이미지의 앵커 위치
        }),
      }),
    })
  );

  useEffect(() => {
    drawRef.current = new Draw({
      source: onCanvas ? vectorSourceRef.current : undefined,
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
          scale: 0.07,
          src: icon.marker, // 마커 이미지 경로
          anchor: [0.5, 1], // 마커 이미지의 앵커 위치
        }),
      }),
    });
  }, [onCanvas]);
  const startDrawing = () => {
    if (onClick) {
      onClick();
    }
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
        text: makeText({
          text: "unknown",
          size: 15,
          color: "black",
          outline: true,
          isMarker: true,
        }),
        image: new Icon({
          scale: 0.07,
          src: icon.marker, // 마커 이미지 경로
          anchor: [0.5, 1], // 마커 이미지의 앵커 위치
        }),
      })
    );
    feature.setProperties({
      shape: "Point",
      isModifying: false,
      source: vectorSourceRef.current,
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
  }, [isActive, map]);

  useEffect(() => {
    vectorLayerRef.current.setSource(vectorSourceRef.current);

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
      popupText="Point"
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
        <PointIcon size={22} color={isActive ? "white" : "black"} />
      </InnerButton>
    </Button>
  );
}
