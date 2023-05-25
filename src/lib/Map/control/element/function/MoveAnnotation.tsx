import useSelectAnnotation from "src/lib/Map/hooks/incontext/useSelectAnnotation";
import Button, { ButtonProps } from "../Button";
import { Translate } from "ol/interaction";
import { useCallback, useEffect, useRef } from "react";
import { useMap } from "src/lib/Map/hooks";
import { Collection } from "ol";
import { BiMove } from "react-icons/bi";
import { ModifyEvent } from "ol/interaction/Modify";
import { TranslateEvent } from "ol/interaction/Translate";

interface MoveAnnotationProps extends ButtonProps {
  onChange?: (e: TranslateEvent) => void;
}

export default function MoveAnnotation(props: MoveAnnotationProps) {
  const translateInteractionRef = useRef<Translate | null>(null);
  const clickedAnnotation = useSelectAnnotation();
  const map = useMap();

  const onMoveEnd = useCallback((event: TranslateEvent) => {
    if (props.onChange) {
      props.onChange(event);
    }
  }, []);

  useEffect(() => {
    if (clickedAnnotation && props.isActive) {
      translateInteractionRef.current = new Translate({
        features: new Collection([clickedAnnotation]),
      });
      translateInteractionRef.current.on("translateend", onMoveEnd);
      map.addInteraction(translateInteractionRef.current);
    }

    return () => {
      if (translateInteractionRef.current) {
        translateInteractionRef.current.un("translateend", onMoveEnd);
        map.removeInteraction(translateInteractionRef.current);
        translateInteractionRef.current = null;
      }
    };
  }, [clickedAnnotation, map, props.isActive]);

  return (
    <Button {...props}>
      <BiMove />
    </Button>
  );
}
