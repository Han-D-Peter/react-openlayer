import { Feature } from "ol";
import { all } from "ol/loadingstrategy";
import { Circle, Point } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import { fromLonLat } from "ol/proj";
import VectorSource from "ol/source/Vector";
import { Fill, Icon, Stroke, Style, Text } from "ol/style";
import { useEffect, useRef } from "react";
import { ANNOTATION_COLOR } from "../../constants";
import { useInteractionEvent, useMap } from "../../hooks";
import { Location } from "../../MapContainer";
import { InnerText } from "../../Text";
import { icon, makeText } from "../../utils";
import { CustomCircle } from "./Circle";
import { ImageMarker } from "./ImageMarker";

interface BoundaryCircleProps {
  /**
   * @description by meter
   */
  circleRadius: number;
  children: string;
  color: keyof typeof ANNOTATION_COLOR;
  center: Location;
  onClick?: () => void;
  onHover?: () => void;
  onLeave?: () => void;
}

export function BoundaryCircle({
  circleRadius,
  children,
  color = "ROYAL_BLUE",
  center,
  onClick,
  onHover,
  onLeave,
}: BoundaryCircleProps) {
  const map = useMap();
  const annotationRef = useRef<Feature<Point>>(
    new Feature(new Point(fromLonLat(center)))
  );
  const annotationLayerRef = useRef<VectorLayer<VectorSource>>(
    new VectorLayer({
      zIndex: 12,
      source: new VectorSource({
        features: [annotationRef.current],
      }),
    })
  );

  const annotationStyleRef = useRef(
    new Style({
      text: new Text({
        text: children,
        textAlign: "center",
        font: `200 16px roboto, sans-serif`,
        fill: new Fill({
          color: "white",
        }),
        offsetY: -40,
        overflow: true,
        stroke: new Stroke({
          color: "white",
          width: 1,
        }),
        backgroundFill: new Fill({
          color: "rgba(0,0,0,0.7)",
        }),

        padding: [6, 4, 2, 8],
      }),
      image: new Icon({
        src: icon.imageCircleMarker[color], // 마커 이미지 경로
        scale: 0.25,
        anchor: [0.5, 0.5], // 마커 이미지의 앵커 위치
      }),
    })
  );

  function onClickHandler(feature: Feature) {
    onClick && onClick();
  }

  function onHoverHandler() {
    onHover && onHover();
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
    annotationRef.current.setStyle(annotationStyleRef.current);
    annotationRef.current.setProperties({
      shape: "Marker",
      isModifying: false,
      source: annotationLayerRef.current.getSource(),
      layer: annotationLayerRef.current,
      hasPopup: false,
    });
    map.addLayer(annotationLayerRef.current);
    return () => {
      map.removeLayer(annotationLayerRef.current);
    };
  }, [map, circleRadius, children, color, center, onClick, onHover, onLeave]);

  return (
    <CustomCircle
      hasStroke={false}
      onHover={onHoverHandler}
      onLeave={onLeaveHandler}
      zIndex={10}
      center={center}
      radius={circleRadius * 1.25}
      color={color}
      properties={{ notSelectable: true }}
    ></CustomCircle>
  );
}
