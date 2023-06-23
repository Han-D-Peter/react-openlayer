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
import { Map, View } from "ol";

icon.marker = "/images/marker-basic.png";
icon.selected = "/images/marker-selected.png";

function App() {
  const [isShown, setIsShown] = useState(true);

  function off() {
    setIsShown((prev) => !prev);
  }

  const ref = useRef<Map>(null);
  const imageRef = useRef<ImageOverlayRef>(null);

  return (
    <div className="App">
      <button
        onClick={() => {
          // ref.current?.setView(
          //   new View({ center: fromLonLat([126.840884, 35.190816]), zoom: 10 })
          // );
          if (ref.current) {
            imageRef.current?.removeFrom(ref.current);
          }
        }}
      >
        off
      </button>
      <MapContainer ref={ref} isAbledSelection>
        {/* <GeoJsonLayer geoJson={geoJsonSample} /> */}
        <TileLayer
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
        {/* <CustomCircle center={[126.841242, 35.190518]} r[adius={20}>
        <InnerText size={27} color="red" outline={false}>
          hello1
        </InnerText>
      </CustomCircle> */}
        <LayerGroup zIndex={1}>
          <CustomMarker selected center={[126.841384, 35.191516]}>
            <InnerText outline>Marker</InnerText>
          </CustomMarker>
          <CustomMarker center={[126.841084, 35.191516]}>
            <InnerText outline>Marker</InnerText>
          </CustomMarker>
          <CustomCircle
            center={[126.841884, 35.191516]}
            radius={20}
            color="RED"
          >
            <InnerText isPopup>Circle1</InnerText>
          </CustomCircle>
        </LayerGroup>
        <LayerGroup zIndex={0}>
          <CustomCircle
            center={[126.841784, 35.191406]}
            radius={20}
            color="BLUE"
          >
            <InnerText>Circle2</InnerText>
          </CustomCircle>
        </LayerGroup>
        {isShown && (
          <>
            <LayerGroup zIndex={2}>
              <CustomMultiPoint
                onClick={(event) =>
                  console.log("event", getProfileFromFeature(event.annotation))
                }
                positions={[
                  [126.843684, 35.190616],
                  [126.840476, 35.190219],
                  [126.840604, 35.190133],
                  [126.841268, 35.190381],
                ]}
              >
                <InnerText>multi</InnerText>
              </CustomMultiPoint>
              <CustomMultiPoint
                onClick={(event) =>
                  console.log("event", getProfileFromFeature(event.annotation))
                }
                positions={[
                  [126.843624, 35.190556],
                  [126.840416, 35.190159],
                  [126.840544, 35.190073],
                  [126.841208, 35.190321],
                ]}
              >
                <InnerText>multi</InnerText>
              </CustomMultiPoint>
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
        )}
        {/* <CustomTextMarker center={[126.841711, 35.190274]}>
        <InnerText outline>Text</InnerText>
      </CustomTextMarker>
      <CustomMarker center={[127.9745613, 37.3336563]}>
        <InnerText outline>Marker</InnerText>
      </CustomMarker>

      <CustomRectangle
        positions={[
          [
            [126.840684, 35.190616],
            [126.840476, 35.190219],
            [126.840604, 35.190133],
            [126.840868, 35.190381],
          ],
        ]}
      >
        <InnerText>hello2</InnerText>
      </CustomRectangle> */}

        <CompassWheel />
        <ControlSection>
          <ZoomFeature />
          <FullScreenFeature />
          <DrawingTools onCanvas />
        </ControlSection>
      </MapContainer>
    </div>
  );
}

export default App;
