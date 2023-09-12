import { useMapEventHandler } from "./lib";

const TestField = () => {
  useMapEventHandler({
    onDrag: () => console.log("drag"),
  });
  return <></>;
};

export default TestField;
