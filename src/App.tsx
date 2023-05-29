import React, { useEffect, useState } from "react";
import {
  CustomCircle,
  CustomMarker,
  CustomPolyLine,
  CustomPolygon,
  CustomTextMarker,
} from "./lib/Map/layer/annotation";
import { CustomRectangle } from "./lib/Map/layer/annotation";
import InnerText from "./lib/Map/Text";
import useMapEventHandler from "./lib/Map/hooks/incontext/useMapEventHandler";
import FullScreenFeature from "./lib/Map/control/FullScreenFeature";
import ControlSection from "./lib/Map/control/layout/ControlSection";
import ControlGroup from "./lib/Map/control/layout/ControlGroup";
import Button from "./lib/Map/control/element/Button";
import ZoomFeature from "./lib/Map/control/ZoomFeature";
import CompassWheel from "./lib/Map/control/CompassWheel";
import { GeoJsonLayer, TileLayer } from "./lib/Map/layer/tileLayer";
import LayerGroup from "./lib/Map/layer/LayerGroup";
import DrawingTools from "./lib/Map/control/DrawingTools";
import { getProfileFromFeature } from "./lib/Map/utils/utils";
import CustomMultiPoint from "./lib/Map/layer/annotation/MultiPoint";

function App() {
  const [isShown, setIsShown] = useState(true);

  function off() {
    setIsShown((prev) => !prev);
  }

  return (
    <div className="App">
      {/* <GeoJsonLayer geoJson={geoJsonSample} /> */}
      <TileLayer url="https://tgxe79f6wl.execute-api.ap-northeast-2.amazonaws.com/dev/dev-drone-square-bucket/public/1/manifold/orthomosaic_tiles/{z}/{x}/{y}.png" />
      {/* <CustomCircle center={[126.841242, 35.190518]} radius={20}>
        <InnerText size={27} color="red" outline={false}>
          hello1
        </InnerText>
      </CustomCircle> */}

      {isShown && (
        <>
          <LayerGroup zIndex={1}>
            <CustomMarker
              onClick={(event) =>
                console.log("event", getProfileFromFeature(event.annotation))
              }
              center={[126.840711, 35.190274]}
            >
              <InnerText>Marker</InnerText>
            </CustomMarker>
          </LayerGroup>
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
