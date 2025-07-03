import VectorSource from "ol/source/Vector";

export default function useDrawSource() {
  return { drawVectorSource: new VectorSource() };
  // useContext(ControlContext) as {
  //   drawVectorSource: VectorSource;
  // };
}
