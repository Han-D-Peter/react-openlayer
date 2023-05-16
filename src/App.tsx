import React from "react";
import { CustomCircle } from "./lib/Map/layer/annotation";
import { CustomRectangle } from "./lib/Map/layer/annotation";
import InnerText from "./lib/Map/Text";

function App() {
  return (
    <div className="App">
      <CustomCircle
        center={[127.9745613, 37.3236563]}
        radius={100}
        onClick={(e) => {
          console.log("click", e);
        }}
        onHover={(e) => {
          console.log("hover", e);
        }}
      >
        <InnerText size={27} color="red" outline={false}>
          hello1
        </InnerText>
      </CustomCircle>
      <CustomCircle center={[127.9645613, 37.3236563]} radius={1000}>
        <InnerText>hello2</InnerText>
      </CustomCircle>
      <CustomRectangle
        onClick={(e) => {
          console.log("click", e);
        }}
        onHover={(e) => {
          console.log("hover", e);
        }}
        positions={[
          [
            [127.9765613, 37.3236563],
            [127.9795613, 37.3236563],
            [127.9795613, 37.3136563],
            [127.9765613, 37.3136563],
          ],
        ]}
      >
        <InnerText>hello2</InnerText>
      </CustomRectangle>
    </div>
  );
}

export default App;
