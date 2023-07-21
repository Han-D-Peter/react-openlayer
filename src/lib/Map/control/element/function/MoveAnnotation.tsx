import React, { useId } from "react";
import { useCallback, useEffect, useRef } from "react";
import { Collection } from "ol";
import { Translate } from "ol/interaction";
import { TranslateEvent } from "ol/interaction/Translate";
import { Button, ButtonProps } from "../Button";
import { useMap, useSelectAnnotation } from "../../../hooks";
import { MovementIcon } from "../../../constants/icons/MovementIcon";
import { useControlSection } from "../../layout";

export interface MoveAnnotationProps extends ButtonProps {
  onMoveChange?: (e: TranslateEvent) => void;
}

export function MoveAnnotation({
  onMoveChange,
  ...props
}: MoveAnnotationProps) {
  const translateInteractionRef = useRef<Translate | null>(null);
  const clickedAnnotation = useSelectAnnotation();
  const map = useMap();
  const id = useId();
  const buttonId = `controlbutton-${id}`;
  const { selectButton, selectedButtonId } = useControlSection();
  const isActive = buttonId === selectedButtonId;

  const onMoveEnd = useCallback((event: TranslateEvent) => {
    if (onMoveChange) {
      onMoveChange(event);
    }
  }, []);

  useEffect(() => {
    if (clickedAnnotation && isActive) {
      translateInteractionRef.current = new Translate({
        features: new Collection([clickedAnnotation]),
      });
      translateInteractionRef.current.on("translateend", onMoveEnd);
      selectButton(buttonId);
      map.addInteraction(translateInteractionRef.current);
    }

    return () => {
      if (translateInteractionRef.current) {
        translateInteractionRef.current.un("translateend", onMoveEnd);
        map.removeInteraction(translateInteractionRef.current);
        translateInteractionRef.current = null;
      }
    };
  }, [buttonId, clickedAnnotation, map, onMoveEnd, isActive, selectButton]);

  return (
    <Button
      id={buttonId}
      onClick={() => {
        if (isActive) {
          selectButton("");
        } else {
          selectButton(buttonId);
        }
      }}
      isActive={isActive}
      {...props}
    >
      <MovementIcon />
    </Button>
  );
}
