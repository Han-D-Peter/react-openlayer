import React from "react";
import { useCallback, useEffect, useRef } from "react";
import { Collection } from "ol";
import { Translate } from "ol/interaction";
import { TranslateEvent } from "ol/interaction/Translate";
import Button, { ButtonProps } from "../Button";
import { useMap, useSelectAnnotation } from "../../../hooks";
import { MovementIcon } from "../../../constants/icons/MovementIcon";

export interface MoveAnnotationProps extends ButtonProps {
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
      <MovementIcon />
    </Button>
  );
}
