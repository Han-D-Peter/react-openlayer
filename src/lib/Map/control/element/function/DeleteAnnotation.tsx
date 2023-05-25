import { useMap } from "src/lib/Map/hooks";
import Button, { ButtonProps } from "../Button";
import { useEffect, useRef } from "react";
import { Select } from "ol/interaction";
import useSelectAnnotation from "src/lib/Map/hooks/incontext/useSelectAnnotation";
import { SelectEvent } from "ol/interaction/Select";
import { FaEraser } from "react-icons/fa";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

interface DeleteAnnotationProps extends ButtonProps {
  onChange?: (e: SelectEvent) => void;
}

export default function DeleteAnnotation(props: DeleteAnnotationProps) {
  const clickedAnnotation = useSelectAnnotation();
  const map = useMap();
  const selectInteractionRef = useRef<Select | null>(null);

  const removeSelectedFeatures = (event: SelectEvent) => {
    const selectedFeatures = event.selected;
    console.log("remove");
    selectedFeatures.forEach((selectedFeature) => {
      if (selectedFeature.getGeometry()) {
        const vectorSource = selectedFeature.getProperties()
          .source as VectorSource;
        vectorSource.clear();
        const vectorLayer = selectedFeature.getProperties()
          .layer as VectorLayer<VectorSource>;
        map.removeLayer(vectorLayer);
      }
    });
  };

  useEffect(() => {
    if (props.isActive) {
      if (!selectInteractionRef.current) {
        selectInteractionRef.current = new Select();
        selectInteractionRef.current.on("select", removeSelectedFeatures);
        map.addInteraction(selectInteractionRef.current);
      }
    } else {
      if (selectInteractionRef.current) {
        selectInteractionRef.current.un("select", removeSelectedFeatures);
        map.removeInteraction(selectInteractionRef.current);
        selectInteractionRef.current = null;
      }
    }
  }, [map, props.isActive]);

  useEffect(() => {
    if (selectInteractionRef.current && clickedAnnotation) {
      selectInteractionRef.current.getFeatures().clear();
      selectInteractionRef.current.getFeatures().push(clickedAnnotation);
    }
  }, [clickedAnnotation]);

  return (
    <Button {...props}>
      <FaEraser />
    </Button>
  );
}
