import React, { useRef, useState } from "react";
import {
  CustomCircle,
  CustomMarker,
  CustomPolyLine,
  CustomPolygon,
  CustomRectangle,
} from "./lib/Map/layer/annotation";
import { InnerText } from "./lib/Map/Text";
import { FullScreenFeature } from "./lib/Map/control/FullScreenFeature";
import { ControlSection } from "./lib/Map/control/layout/ControlSection";
import { ZoomFeature } from "./lib/Map/control/ZoomFeature";
import { CompassWheel } from "./lib/Map/control/CompassWheel";
import {
  CaptureMap,
  GeoJsonLayer,
  ImageOverlay,
  ImageOverlayProps,
  ImageOverlayRef,
  LayerGroup,
  MapContainer,
  TileLayer,
  fromLonLat,
} from "./lib/Map";
import { DrawingTools } from "./lib/Map/control/DrawingTools";
import { getProfileFromFeature } from "./lib/Map/utils/utils";
import { CustomMultiPoint } from "./lib/Map/layer/annotation/MultiPoint";
import { icon } from "./lib";
import {
  positionsFromFeature,
  positionsFromMultiPointFeatures,
} from "./lib/utils/feature";

import { Map, View } from "ol";
import { SyncMapGroup } from "../src/lib/Map/SyncMapGroup";
import { SyncMap } from "../src/lib/Map/SyncMapGroup/SyncMap";
import _ from "lodash";
import TestField from "./TestField";
import json from "./sample.json";

icon.marker = "/images/marker-basic.png";
icon.selected = "/images/marker-selected.png";

function App() {
  const [isShown, setIsShown] = useState(true);
  const [rotate, setRotate] = useState(0);
  const [bounds, setBounds] = useState<[Location, Location]>([
    [126.841019, 35.189171],
    [126.841235, 35.189381],
  ] as unknown as [Location, Location]);

  const [mapSize, setMapSize] = useState({ width: "1000px", height: "100vh" });

  function off() {
    console.log(isShown);
    if (isShown) {
      setIsShown(false);
    } else {
      setIsShown(true);
    }
  }

  const ref = useRef<Map>(null);
  const imageRef = useRef<ImageOverlayRef>(null);

  return (
    <div className="App">
      <button
        onClick={() => {
          off();
        }}
      >
        off
      </button>

      <MapContainer
        height={mapSize.height}
        width={mapSize.width}
        ref={ref}
        isAbledSelection
      >
        {/* <GeoJsonLayer geoJson={json} color="blue" /> */}
        <TestField />
        <TileLayer
          maxZoom={23}
          crossOrigin={"anonymous"}
          url="https://d3ma6smoldwaof.cloudfront.net/1/manifold/orthomosaic_tiles/{z}/{x}/{y}.png"
        />
        <ImageOverlay
          ref={imageRef}
          imageUrl="images/compass.png"
          bounds={[
            [126.841384, 35.191316],
            [126.841584, 35.191516],
          ]}
        />
        <LayerGroup zIndex={1}>
          <CustomMarker
            opacity={0.4}
            center={[126.840492, 35.190337]}
            onClick={() => {
              console.log("click");
            }}
          >
            {isShown ? <InnerText outline>bottom left</InnerText> : null}
          </CustomMarker>
          <CustomMarker center={[126.840746, 35.190475]}>
            {isShown ? (
              <InnerText isPopup outline>
                top right
              </InnerText>
            ) : null}
          </CustomMarker>

          <CustomCircle
            isDisabledSelection
            center={[126.841884, 35.191516]}
            radius={20}
            color="RED"
          >
            <InnerText isPopup>Circle1</InnerText>
          </CustomCircle>
        </LayerGroup>
        <LayerGroup zIndex={0}>
          <CustomCircle
            isDisabledSelection
            center={[126.841784, 35.191406]}
            radius={20}
            color="BLUE"
          >
            {isShown ? <InnerText>Circle2</InnerText> : null}
          </CustomCircle>
          <CustomPolyLine
            isDisabledSelection
            positions={[
              [126.840684, 35.190816],
              [126.840476, 35.190419],
              [126.840604, 35.190333],
              [126.840868, 35.190581],
            ]}
          ></CustomPolyLine>
          <CustomRectangle
            positions={[
              [
                [126.840684, 35.190219],
                [126.840476, 35.190219],
                [126.840476, 35.190133],
                [126.840684, 35.190133],
              ],
            ]}
          ></CustomRectangle>
        </LayerGroup>

        <CustomMultiPoint
          onClick={(event) => {
            console.log("raw event ", event);
            console.log("event", getProfileFromFeature(event.annotation));
          }}
          positions={[
            [126.843684, 35.190616],
            [126.840476, 35.190219],
            [126.840604, 35.190133],
            [126.841268, 35.190381],
          ]}
        ></CustomMultiPoint>
        <CustomPolygon
          onClick={(event) =>
            console.log("event", getProfileFromFeature(event.annotation))
          }
          positions={[
            [
              [126.840884, 35.190816],
              [126.840676, 35.190419],
              [126.840804, 35.190333],
              [126.841068, 35.190581],
            ],
          ]}
        >
          <InnerText isPopup>hello2</InnerText>
        </CustomPolygon>

        {/* {isShown && (
          <>
            <LayerGroup zIndex={2}>
              <CustomPolygon
                onClick={(event) =>
                  console.log("event", getProfileFromFeature(event.annotation))
                }
                positions={[
                  [
                    [126.840884, 35.190816],
                    [126.840676, 35.190419],
                    [126.840804, 35.190333],
                    [126.841068, 35.190581],
                    [126.840884, 35.190816],
                  ],
                ]}
              >
                <InnerText isPopup>hello2</InnerText>
              </CustomPolygon>
              <CustomPolyLine
                positions={[
                  [126.840684, 35.190816],
                  [126.840476, 35.190419],
                  [126.840604, 35.190333],
                  [126.840868, 35.190581],
                ]}
              >
                <InnerText isPopup>hello2</InnerText>
              </CustomPolyLine>
              <CustomRectangle
                positions={[
                  [
                    [126.840684, 35.190219],
                    [126.840476, 35.190219],
                    [126.840476, 35.190133],
                    [126.840684, 35.190133],
                  ],
                ]}
              >
                <InnerText isPopup>hello2</InnerText>
              </CustomRectangle>
            </LayerGroup>
          </>
        )} */}

        <CompassWheel />
        <ControlSection>
          <ZoomFeature />
          <FullScreenFeature />
          <DrawingTools
            multiMarker={false}
            onCanvas
            onDrawEnd={(e) => {
              if (!_.isArray(e)) {
                console.log(positionsFromFeature(e));
              } else {
                console.log(positionsFromMultiPointFeatures(e));
              }
            }}
          />
        </ControlSection>
      </MapContainer>
      <input
        type="range"
        min={0}
        max={360}
        onChange={(e) => {
          console.log("degree", e.target.value);
          setRotate(Number(e.target.value));
        }}
      />
      <SyncMapGroup rotate={rotate}>
        <SyncMap>
          <ControlSection>
            <h1>hello</h1>
          </ControlSection>
        </SyncMap>
        <SyncMap>
          <ControlSection>
            <h1>hello</h1>
          </ControlSection>
        </SyncMap>
      </SyncMapGroup>
    </div>
  );
}

export default App;
