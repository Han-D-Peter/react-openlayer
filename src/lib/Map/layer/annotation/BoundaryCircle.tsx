import React, { useEffect, useRef } from "react";
import Feature from "ol/Feature";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { Text, Fill, Stroke, Icon } from "ol/style";
import Style from "ol/style/Style";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Location } from "../../MapContainer";
import { icon } from "../../utils";
import { CustomCircle } from "./Circle";
import { Annotation } from ".";
import { useMap } from "../../hooks/incontext/useMap";
import { useInteractionEvent } from "../../hooks/incontext/useInteractionEvent";
import { Geometry } from "ol/geom";

export interface BoundaryCircleProps extends Annotation {
  center: Location;
  radius: number;
}

export const BoundaryCircle = ({
  center,
  radius,
  color = "BLUE",
  properties = {},
  onClick,
  onHover,
  onLeave,
  zIndex = 0,
  children,
  opacity = 1,
  isDisabledSelection = false,
}: BoundaryCircleProps) => {
  const map = useMap();
  const annotationRef = useRef<Feature<Point>>(
    new Feature(new Point(fromLonLat(center)))
  );

  const annotationLayerRef = useRef<
    VectorLayer<VectorSource<Feature<Geometry>>>
  >(
    new VectorLayer({
      source: new VectorSource({
        wrapX: false,
        features: [annotationRef.current],
      }),
    })
  );

  const annotationStyleRef = useRef(
    new Style({
      text: new Text({
        text: typeof children === "string" ? children : "",
        textAlign: "center",
        font: `500 16px roboto, sans-serif`,
        fill: new Fill({
          color: "black",
        }),
        offsetY: -40,
        overflow: true,
        stroke: new Stroke({
          color: "white",
          width: 1,
        }),
        backgroundFill: new Fill({
          color: "rgba(255,255,255,0.7)",
        }),

        padding: [7, 7, 4, 11],
      }),
      image: new Icon({
        src: icon.imageCircleMarker[color], // 마커 이미지 경로
        scale: 0.25,
        anchor: [0.5, 0.5], // 마커 이미지의 앵커 위치
      }),
    })
  );

  function onClickHandler(feature: Feature<Geometry>) {
    onClick &&
      onClick({
        annotation: feature,
        properties: properties,
      });
  }

  function onHoverHandler(feature: Feature<Geometry>) {
    onHover &&
      onHover({
        annotation: feature,
        properties: properties,
      });
  }

  function onLeaveHandler() {
    onLeave && onLeave();
  }

  useInteractionEvent({
    annotation: annotationLayerRef.current,
    onClick: onClickHandler,
    // onHover: onHoverHandler,
    // onLeave: onLeaveHandler,
  });

  useEffect(() => {
    if (annotationRef.current) {
      const geometry = annotationRef.current.getGeometry() as Point;
      geometry.setCoordinates(fromLonLat(center));
    }
  }, [center]);

  useEffect(() => {
    if (annotationRef.current) {
      annotationStyleRef.current.setImage(
        new Icon({
          src: icon.imageCircleMarker[color], // 마커 이미지 경로
          scale: 0.25,
          anchor: [0.5, 0.5], // 마커 이미지의 앵커 위치
        })
      );
    }
    annotationRef.current.setStyle(annotationStyleRef.current);
  }, [color]);

  useEffect(() => {
    const annotationLayerCurrent = annotationLayerRef.current;
    const sourceInAnnotation = annotationLayerCurrent.getSource();
    annotationRef.current.setStyle(annotationStyleRef.current);
    annotationRef.current.setProperties({
      shape: "Marker",
      isModifying: false,
      source: sourceInAnnotation,
      layer: annotationLayerCurrent,
      hasPopup: false,
    });
    map.addLayer(annotationLayerCurrent);
    return () => {
      sourceInAnnotation?.clear();
      map.removeLayer(annotationLayerCurrent);
    };
  }, [map, radius, children, color, center, onClick, onHover, onLeave]);

  return (
    <CustomCircle
      hasStroke={true}
      onHover={(event) => onHoverHandler(event.annotation as Feature<Geometry>)}
      onLeave={onLeaveHandler}
      zIndex={10}
      center={center}
      radius={radius * 1.25}
      color={color}
      properties={{ notSelectable: true }}
    ></CustomCircle>
  );
};
