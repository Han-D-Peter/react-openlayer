import React from "react";
import { Button, ButtonProps } from "../Button";
import { useEffect, useRef } from "react";
import { Draw } from "ol/interaction";
import { useFeatureStore, useMap } from "../../../hooks";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import { makeText } from "../../../utils/object";
import { DrawEvent } from "ol/interaction/Draw";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import Icon from "ol/style/Icon";
import { Geometry, LineString } from "ol/geom";
import { Feature } from "ol";
import { PolylineIcon } from "../../../constants/icons/PolylineIcon";

export interface PolylineDrawButtonProps extends ButtonProps {
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
}

export function PolylineDrawButton({
  onEnd,
  onClick,
  onCanvas = false,
  onStart,
  ...props
}: PolylineDrawButtonProps) {
  const map = useMap();
  const { selectFeature } = useFeatureStore();
  const vectorSourceRef = useRef(new VectorSource());
  const vectorLayerRef = useRef(new VectorLayer({ zIndex: 1 }));
  const drawRef = useRef(
    new Draw({
      source: onCanvas ? vectorSourceRef.current : undefined,
      type: "LineString",
      style: new Style({
        stroke: new Stroke({
          color: "rgb(2, 26, 255)",
          width: 2,
        }),
        fill: new Fill({
          color: "rgba(2, 26, 255, 0.3)",
        }),
        image: new Icon({
          src: "/images/polyline.svg", // 마커 이미지 경로
          anchor: [0.5, 1], // 마커 이미지의 앵커 위치
        }),
      }),
    })
  );

  useEffect(() => {
    drawRef.current = new Draw({
      source: onCanvas ? vectorSourceRef.current : undefined,
      type: "LineString",
      style: new Style({
        stroke: new Stroke({
          color: "rgb(2, 26, 255)",
          width: 2,
        }),
        fill: new Fill({
          color: "rgba(2, 26, 255, 0.3)",
        }),
        image: new Icon({
          src: "/images/polyline.svg", // 마커 이미지 경로
          anchor: [0.5, 1], // 마커 이미지의 앵커 위치
        }),
      }),
    });
  }, [onCanvas]);
  const startDrawing = () => {
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
    const geometry = feature.getGeometry() as LineString;
    feature.setStyle(
      new Style({
        stroke: new Stroke({
          color: "rgb(2, 26, 255)",
          width: 2,
        }),
        fill: new Fill({
          color: "rgba(2, 26, 255, 0.3)",
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
      shape: "Polyline",
      isModifying: false,
      source: vectorSourceRef.current,
      layer: vectorLayerRef.current,
      positions: geometry.getCoordinates(),
    });

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
      <PolylineIcon />
    </Button>
  );
}
