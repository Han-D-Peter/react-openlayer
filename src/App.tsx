import React, { useEffect, useRef, useState } from "react";
import { CustomMarker } from "./lib/Map/layer/annotation";
import { FullScreenFeature } from "./lib/Map/control/FullScreenFeature";
import { ControlSection } from "./lib/Map/control/layout/ControlSection";
import { ZoomFeature } from "./lib/Map/control/ZoomFeature";
import { CompassWheel } from "./lib/Map/control/CompassWheel";
import {
  ImageOverlay,
  ImageOverlayRef,
  MapContainer,
  TileLayer,
  TileMatrix,
  SelectedFeatureStore,
} from "./lib/Map";
import { DrawingTools } from "./lib/Map/control/DrawingTools";
import { icon } from "./lib";

import Map from "ol/Map";
import { SyncMapGroup } from "../src/lib/Map/SyncMapGroup";
import { SyncMap } from "../src/lib/Map/SyncMapGroup/SyncMap";

import json from "./sample.json";
import { FeatureCollection, FeaturesStore } from "./lib/Map/FeaturesStore";

icon.marker = "/images/marker-basic.png";
icon.selected = "/images/marker-selected.png";
icon.imageMarker.selected = "/images/imageMarker(selected).png";
icon.imageMarker.zero = "/images/imageMarker(one).png";
icon.imageMarker.one = "/images/imageMarker(two).png";
icon.imageMarker.two = "/images/imageMarker(three).png";
icon.imageMarker.three = "/images/imageMarker(four).png";
icon.imageCircleMarker.BLUE = "/images/imageCircleMarker/BLUE.png";
icon.imageCircleMarker.BROWN = "/images/imageCircleMarker/BROWN.png";
icon.imageCircleMarker.GREEN = "/images/imageCircleMarker/GREEN.png";
icon.imageCircleMarker.RED = "/images/imageCircleMarker/RED.png";
icon.imageCircleMarker.ROYAL_BLUE = "/images/imageCircleMarker/ROYAL_BLUE.png";
icon.imageCircleMarker.SELECT = "/images/imageCircleMarker/SELECT.png";
icon.imageCircleMarker.SKYBLUE = "/images/imageCircleMarker/SKYBLUE.png";
icon.imageCircleMarker.YELLOW = "/images/imageCircleMarker/YELLOW.png";

function App() {
  const [isShown, setIsShown] = useState(true);
  const [rotate, setRotate] = useState(0);
  const [mapSize] = useState({ width: "1000px", height: "100vh" });

  const [tileMatrix, setTileMatrix] = useState<TileMatrix>();

  const [jsonState, setJsonState] = useState<FeatureCollection>(
    json as FeatureCollection
  );

  function off() {
    if (isShown) {
      setIsShown(false);
    } else {
      setIsShown(true);
    }
  }

  const ref = useRef<Map>(null);
  const imageRef = useRef<ImageOverlayRef>(null);

  useEffect(() => {
    fetch("/tile_matrix.json")
      .then((res) => res.json())
      .then((res) => setTileMatrix(res));
  }, []);

  return (
    <div className="App">
      <button
        onClick={() => {
          off();
        }}
      >
        off
      </button>
      {/* <TestField /> */}
      <MapContainer
        center={[126.576601, 36.88147]}
        zoomLevel={15}
        height={mapSize.height}
        width={mapSize.width}
        ref={ref}
      >
        {/* <GeoJsonLayer geoJson={json} color="red" projectionCode="WGS:84" /> */}
        <FeaturesStore
          geoJson={jsonState}
          projectionCode="WGS:84"
          onChange={setJsonState}
          // onChange={(value) => console.log("value", value)}
        >
          <SelectedFeatureStore isMovable isAbledSelection={true}>
            <TileLayer
              maxZoom={23}
              crossOrigin={"anonymous"}
              tileMatrix={tileMatrix}
              url="https://tgxe79f6wl.execute-api.ap-northeast-2.amazonaws.com/dev/dev-drone-square-bucket/public/1070/manifold/orthomosaic_tiles/{z}/{x}/{y}.png"
            />
            <ImageOverlay
              ref={imageRef}
              imageUrl="images/compass.png"
              bounds={[
                [126.841384, 35.191316],
                [126.841584, 35.191516],
              ]}
            />
            {/* <LayerGroup zIndex={0}>
            <BoundaryCircle
              center={[126.841284, 35.191516]}
              circleRadius={200}
              color="RED"
              onClick={() => console.log("boundary")}
              onHover={() => console.log("boundary hover")}
              onLeave={() => console.log("boundary leave")}
            >
              상수도 보호구역
            </BoundaryCircle>
          </LayerGroup>
          */}

            {/* {isShown && (
              <LayerGroup zIndex={2}>
                <CustomPolygon
                  onClick={(event) =>
                    console.log(
                      "event",
                      getProfileFromFeature(event.annotation)
                    )
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
            )} */}
            <CustomMarker
              center={[126.529692, 35.935785]}
              color="SKYBLUE"
              onClick={() => console.log("boundary")}
              onHover={() => console.log("boundary hover")}
              onLeave={() => console.log("boundary leave")}
            ></CustomMarker>
            <CompassWheel />
            <ControlSection>
              <ZoomFeature />
              <FullScreenFeature />
              <DrawingTools
                arrange="horizontal"
                color="RED"
                onCanvas
                onModify={() => {}}
                onDrawEnd={(e) => {}}
              />
            </ControlSection>
          </SelectedFeatureStore>
        </FeaturesStore>
        {/* <CaptureMap onCaptured={(img) => console.log("img", img)} /> */}
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
          <FeaturesStore
            geoJson={jsonState}
            projectionCode="WGS:84"
            onChange={setJsonState}
          >
            <SelectedFeatureStore isAbledSelection={true}>
              <CompassWheel />
              <ControlSection>
                <ZoomFeature />
                <FullScreenFeature />
                <DrawingTools color="RED" onCanvas onDrawEnd={(e) => {}} />
              </ControlSection>
            </SelectedFeatureStore>
          </FeaturesStore>
        </SyncMap>
        <SyncMap>
          <FeaturesStore geoJson={jsonState} projectionCode="WGS:84">
            <SelectedFeatureStore
              isAbledSelection={true}
            ></SelectedFeatureStore>
          </FeaturesStore>
        </SyncMap>
        <SyncMap>
          <FeaturesStore geoJson={jsonState} projectionCode="WGS:84">
            <SelectedFeatureStore
              isAbledSelection={true}
            ></SelectedFeatureStore>
          </FeaturesStore>
        </SyncMap>
      </SyncMapGroup>
    </div>
  );
}

export default App;
