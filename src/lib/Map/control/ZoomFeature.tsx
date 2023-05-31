import Button from "./element/Button";
import ControlGroup from "./layout/ControlGroup";
import { useMap } from "../hooks";
import { useEffect, useState } from "react";
import { ZoomIn } from "../constants/icons/ZoomIn";
import { ZoomOut } from "../constants/icons/ZoomOut";

const ZoomFeature = () => {
  const map = useMap();
  const [zoomAmount, setZoomAmount] = useState<number>(
    map.getView().getZoom() ?? 0
  );

  const maxZoom = map.getView().getMaxZoom();
  const minZoom = map.getView().getMinZoom();

  const isAbledZoomIn = zoomAmount !== maxZoom;

  const isAbledZoomOut = zoomAmount !== minZoom;

  const zoomIn = () => {
    if (zoomAmount < maxZoom) {
      setZoomAmount((prev) => prev + 1);
      map.getView().setZoom(zoomAmount + 1);
    }
  };

  const zoomOut = () => {
    if (zoomAmount > minZoom) {
      setZoomAmount((prev) => prev - 1);
      map.getView().setZoom(zoomAmount - 1);
    }
  };

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();
    console.log(map.getView().getZoom());
    setZoomAmount(map.getView().getZoom() ?? 0);
  };

  useEffect(() => {
    const viewPort = map.getViewport();
    viewPort.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      viewPort.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <ControlGroup>
      <Button onClick={zoomIn} isDisabled={!isAbledZoomIn}>
        <ZoomIn size={18} color={isAbledZoomIn ? "black" : "#e2e2e2"} />
      </Button>
      <Button onClick={zoomOut} isDisabled={!isAbledZoomOut}>
        <ZoomOut size={18} color={isAbledZoomOut ? "black" : "#e2e2e2"} />
      </Button>
    </ControlGroup>
  );
};

export default ZoomFeature;
