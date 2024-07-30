/* eslint-disable react-hooks/exhaustive-deps */
import styled from "@emotion/styled";
import { MapBrowserEvent, Overlay } from "ol";
import { Coordinate } from "ol/coordinate";
import Feature, { FeatureLike } from "ol/Feature";
import { Point } from "ol/geom";
import { SelectEvent } from "ol/interaction/Select";
import VectorLayer from "ol/layer/Vector";
import { fromLonLat } from "ol/proj";
import VectorSource from "ol/source/Vector";
import { Icon, Style } from "ol/style";
import { useEffect, useLayoutEffect, useRef, useState, useId } from "react";
import { useDidUpdate, useInteractionEvent, useMap } from "../../hooks";
import { icon } from "../../utils";

interface ImageMarkerProps {
  center: Coordinate;

  /**
   * @default false
   * @description can control a image container whether open or close
   */
  isOpened?: boolean;
  imageUrl: string;
  imageTitle: string;
  width?: string;
  height?: string;

  /**
   * @description can adjust scale of Point Image. 1 => 100%
   * @default 1
   */
  pointScale?: number;
  color?: "red";
  zIndex?: number;
  onHover?: (isHover: boolean, annotation: FeatureLike) => void;
  onClick?: (event: {
    annotation: FeatureLike;
    // properties: Record<string, any>;
  }) => void;
  onImageClick?: (imgUrl: string) => void;

  grade?: 0 | 1 | 2 | 3;

  selected?: boolean;
}

function makeImgContainer(
  width: string,
  height: string,
  imageUrl: string,
  imageTitle: string,
  id: string
) {
  const container = document.createElement("div");
  const imgTitleContainer = document.createElement("div");
  container.appendChild(imgTitleContainer);

  container.style.zIndex = "10";
  container.id = id;
  container.style.width = width;
  container.style.height = height;
  container.style.borderRadius = "10px";
  container.style.border = "5px solid black";
  container.style.backgroundImage = `url(${imageUrl})`;
  container.style.backgroundRepeat = "no-repeat";
  container.style.backgroundSize = `${width} ${height}`;
  container.style.cursor = "pointer";
  container.style.position = "absolute";
  container.style.top = "-150px";
  container.style.left = "-104px";

  imgTitleContainer.style.fontSize = "10px";
  imgTitleContainer.style.color = "white";
  imgTitleContainer.style.padding = "5px 6px";
  imgTitleContainer.style.background = "rgba(0, 0, 0, 0.7)";
  imgTitleContainer.innerText = imageTitle;
  imgTitleContainer.style.width = "fit-content";
  imgTitleContainer.style.marginTop = "5px";
  return container;
}

function gradeImage(grade: 0 | 1 | 2 | 3) {
  switch (grade) {
    case 0:
      return icon.imageMarker.zero;
    case 1:
      return icon.imageMarker.one;
    case 2:
      return icon.imageMarker.two;
    case 3:
      return icon.imageMarker.three;
    default:
      break;
  }
}

export function ImageMarker({
  center,
  imageUrl,
  imageTitle,
  width = "194px",
  height = "111px",
  color,
  isOpened = false,
  zIndex = 0,
  onClick,
  onHover,
  onImageClick,
  pointScale = 1,
  grade = 0,
  selected = false,
}: ImageMarkerProps) {
  const overlayCenter = [center[0], center[1]];
  const map = useMap();
  const id = useId();
  const annotationRef = useRef<Feature<Point>>(
    new Feature(new Point(fromLonLat(center)))
  );
  const popupOverlayRef = useRef<Overlay>(
    new Overlay({
      position: fromLonLat(overlayCenter),
      element: makeImgContainer(width, height, imageUrl, imageTitle, id),
      autoPan: false,
      positioning: "bottom-center",
    })
  );
  const annotationLayerRef = useRef<VectorLayer<VectorSource>>(
    new VectorLayer({
      source: new VectorSource({
        features: [annotationRef.current],
      }),
    })
  );

  const hover = () => {
    map.addOverlay(popupOverlayRef.current);
    onHover && onHover(true, annotationRef.current);
  };

  const leave = () => {
    map.removeOverlay(popupOverlayRef.current);
    onHover && onHover(false, annotationRef.current);
  };

  const onClickHandler = (event: MapBrowserEvent<MouseEvent>) => {
    const features = map.getFeaturesAtPixel(event.pixel);
    if (features[0] && annotationRef.current === features[0]) {
      onClick && onClick({ annotation: annotationRef.current });
    }
    // else {
    //   const style = new Style({
    //     image: new Icon({
    //       src: gradeImage(grade), // 마커 이미지 경로
    //       scale: 0.17 * pointScale,
    //       anchor: [0.5, 0.5], // 마커 이미지의 앵커 위치
    //     }),
    //   });

    //   annotationRef.current.setStyle(style);
    // }
    // map.forEachFeatureAtPixel(event.pixel, (feature, layer) => {
    //   if (feature && annotationRef.current === feature) {
    //     onClick && onClick({ annotation: annotationRef.current });
    //     // const preStyle = annotationRef.current.getStyle() as Style;
    //     // const imageIcon = preStyle.getImage() as Icon;
    //     // const iconSrc = imageIcon.getSrc();

    //     // if (iconSrc === icon.imageMarker.selected) {
    //     //   const style = new Style({
    //     //     image: new Icon({
    //     //       src: gradeImage(grade), // 마커 이미지 경로
    //     //       scale: 0.17 * pointScale,
    //     //       anchor: [0.5, 0.5], // 마커 이미지의 앵커 위치
    //     //     }),
    //     //   });

    //     //   annotationRef.current.setStyle(style);
    //     //   return;
    //     // }
    //     // const style = new Style({
    //     //   image: new Icon({
    //     //     src: icon.imageMarker.selected, // 마커 이미지 경로
    //     //     scale: 0.17 * pointScale,
    //     //     anchor: [0.5, 0.5], // 마커 이미지의 앵커 위치
    //     //   }),
    //     // });

    //     // annotationRef.current.setStyle(style);
    //   } else {
    //   }
    // });
  };

  const onHoverHandler = (feature: Feature) => {
    if (feature) {
      if (feature === annotationRef.current) {
        hover();
      }
    } else {
      !isOpened && leave();
    }
  };

  useEffect(() => {
    const overlayElement = popupOverlayRef.current.getElement();
    if (overlayElement) overlayElement.style.zIndex = zIndex.toLocaleString();
  }, [zIndex]);

  useEffect(() => {
    isOpened ? hover() : leave();
    const overlay = popupOverlayRef.current;
    overlay.setElement(
      makeImgContainer(width, height, imageUrl, imageTitle, id)
    );
  }, [isOpened, hover, leave, imageTitle, imageUrl, width, height, id]);

  useEffect(() => {
    if (annotationRef.current) {
      const geometry = annotationRef.current.getGeometry() as Point;
      geometry.setCoordinates(fromLonLat(center));
    }
    if (popupOverlayRef.current) {
      const overlay = popupOverlayRef.current;
      overlay.setPosition(fromLonLat(overlayCenter));
    }
  }, [overlayCenter, center]);

  useEffect(() => {
    if (annotationLayerRef.current) {
      annotationLayerRef.current.setZIndex(zIndex);
    }
  }, [zIndex]);

  useLayoutEffect(() => {
    const style = new Style({
      image: new Icon({
        src: gradeImage(grade), // 마커 이미지 경로
        scale: 0.17 * pointScale,
        anchor: [0.5, 0.5], // 마커 이미지의 앵커 위치
      }),
    });

    annotationRef.current.setStyle(style);
  }, [pointScale, grade]);

  useInteractionEvent({
    annotation: annotationLayerRef.current,
    // onClick: onClickHandler,
    onHover: onHoverHandler,
  });

  useEffect(() => {
    popupOverlayRef.current.getElement()!.onclick = () =>
      onImageClick && onImageClick(imageUrl);
    return () => {
      popupOverlayRef.current.getElement()!.onclick = null;
    };
  }, [onImageClick, imageUrl]);

  useEffect(() => {
    if (selected) {
      const style = new Style({
        image: new Icon({
          src: icon.imageMarker.selected,
          scale: 0.17 * pointScale,
          anchor: [0.5, 0.5], // 마커 이미지의 앵커 위치
        }),
      });

      annotationRef.current.setStyle(style);
    } else {
      const style = new Style({
        image: new Icon({
          src: gradeImage(grade), // 마커 이미지 경로
          scale: 0.17 * pointScale,
          anchor: [0.5, 0.5], // 마커 이미지의 앵커 위치
        }),
      });

      annotationRef.current.setStyle(style);
    }
  }, [selected, grade, pointScale]);

  useEffect(() => {
    map.addLayer(annotationLayerRef.current);
    map.on("click", onClickHandler);

    return () => {
      map.removeLayer(annotationLayerRef.current);
      map.removeOverlay(popupOverlayRef.current);
      map.un("click", onClickHandler);
    };
  }, [map, onClickHandler]);

  return <></>;
}
