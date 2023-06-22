import React from "react";
import { Button, ButtonProps } from "../Button";
import { useCallback, useEffect, useRef } from "react";
import { Modify } from "ol/interaction";
import { doubleClick } from "ol/events/condition";
import { Collection } from "ol";
import { ModifyEvent } from "ol/interaction/Modify";
import { ModifyIcon } from "../../../constants/icons/ModifyIcon";
import { useMap, useSelectAnnotation } from "../../../hooks";

export interface ModifyAnnotationProps extends ButtonProps {
  onChange?: (e: ModifyEvent) => void;
}

export function ModifyAnnotation(props: ModifyAnnotationProps) {
  const clickedAnnotation = useSelectAnnotation();

  const modifyInteractionRef = useRef<Modify | null>(null);

  const map = useMap();

  const onModifyStart = useCallback(() => {
    if (clickedAnnotation) {
      const existProperties = clickedAnnotation.getProperties();
      const existMapProperties = map.getProperties();
      clickedAnnotation.setProperties({
        ...existProperties,
        isModifying: true,
      });

      map.setProperties({ ...existMapProperties, isModifying: true });
    }
  }, [clickedAnnotation]);

  const onModifyEnd = useCallback(
    (event: ModifyEvent) => {
      if (props.onChange) {
        props.onChange(event);
      }
      const existProperties = clickedAnnotation.getProperties();
      clickedAnnotation.setProperties({
        ...existProperties,
        isModifying: true,
      });
    },
    [clickedAnnotation, props.onChange]
  );

  // 수정중임을 map 에 명시
  useEffect(() => {
    const existMapProperties = map.getProperties();
    map.setProperties({ ...existMapProperties, isModifying: props.isActive });
  }, [props.isActive]);

  useEffect(() => {
    if (clickedAnnotation && props.isActive) {
      if (!modifyInteractionRef.current) {
        modifyInteractionRef.current = new Modify({
          features: new Collection([clickedAnnotation]),
          deleteCondition: doubleClick,
        });
        modifyInteractionRef.current.on("modifystart", onModifyStart);
        modifyInteractionRef.current.on("modifyend", onModifyEnd);
        map.addInteraction(modifyInteractionRef.current);
      }
    } else {
      if (modifyInteractionRef.current) {
        modifyInteractionRef.current.un("modifystart", onModifyStart);
        modifyInteractionRef.current.un("modifyend", onModifyEnd);
        map.removeInteraction(modifyInteractionRef.current);
        modifyInteractionRef.current = null;
      }
    }

    return () => {
      if (modifyInteractionRef.current) {
        modifyInteractionRef.current.un("modifystart", onModifyStart);
        modifyInteractionRef.current.un("modifyend", onModifyEnd);
        map.removeInteraction(modifyInteractionRef.current);
        modifyInteractionRef.current = null;
      }
    };
  }, [clickedAnnotation, map, onModifyEnd, onModifyStart, props.isActive]);

  return (
    <Button {...props}>
      <ModifyIcon />
    </Button>
  );
}
