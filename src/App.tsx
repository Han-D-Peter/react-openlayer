import React, { useState } from "react";
import {
  CustomCircle,
  CustomMarker,
  CustomPolygon,
} from "./lib/Map/layer/annotation";
import InnerText from "./lib/Map/Text";
import FullScreenFeature from "./lib/Map/control/FullScreenFeature";
import ControlSection from "./lib/Map/control/layout/ControlSection";
import ZoomFeature from "./lib/Map/control/ZoomFeature";
import CompassWheel from "./lib/Map/control/CompassWheel";
import { TileLayer } from "./lib/Map/layer/tileLayer";
import { ImageOveray, LayerGroup } from "./lib/Map";
import DrawingTools from "./lib/Map/control/DrawingTools";
import { getProfileFromFeature } from "./lib/Map/utils/utils";
import CustomMultiPoint from "./lib/Map/layer/annotation/MultiPoint";
import { icon } from "./lib";

icon.marker = "images/marker-icon.png";

function App() {
  const [isShown, setIsShown] = useState(true);

  function off() {
    setIsShown((prev) => !prev);
  }

  return (
    <div className="App">
      {/* <GeoJsonLayer geoJson={geoJsonSample} /> */}
      {/* <TileLayer url="https://tgxe79f6wl.execute-api.ap-northeast-2.amazonaws.com/dev/dev-drone-square-bucket/public/1/manifold/orthomosaic_tiles/{z}/{x}/{y}.png" /> */}
      <ImageOveray
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
        <CustomCircle center={[126.841884, 35.191516]} radius={20} color="RED">
          <InnerText>Circle1</InnerText>
        </CustomCircle>
      </LayerGroup>
      <LayerGroup zIndex={2}>
        <CustomCircle center={[126.841784, 35.191406]} radius={20} color="BLUE">
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
              <InnerText>hello2</InnerText>
            </CustomPolygon>
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

      {/* <CustomPolyLine
        positions={[
          [126.840884, 35.190816],
          [126.840676, 35.190419],
          [126.840804, 35.190333],
          [126.841068, 35.190581],
        ]}
      >
        <InnerText>hello2</InnerText>
      </CustomPolyLine> */}

      <CompassWheel />
      <ControlSection>
        <ZoomFeature />
        <FullScreenFeature />
        <DrawingTools onCanvas />
      </ControlSection>
      <button onClick={off}>off</button>
    </div>
  );
}

export default App;
