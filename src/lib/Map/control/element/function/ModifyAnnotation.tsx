import Button, { ButtonProps } from "../Button";
import useSelectAnnotation from "src/lib/Map/hooks/incontext/useSelectAnnotation";
import { useCallback, useEffect, useRef } from "react";
import { Modify } from "ol/interaction";
import { doubleClick } from "ol/events/condition";
import { Collection } from "ol";
import { useMap } from "src/lib/Map/hooks";
import { ModifyEvent } from "ol/interaction/Modify";
import { ModifyIcon } from "src/lib/Map/constants/icons/ModifyIcon";

export interface ModifyAnnotationProps extends ButtonProps {
  onChange?: (e: ModifyEvent) => void;
}

export default function ModifyAnnotation(props: ModifyAnnotationProps) {
  const clickedAnnotation = useSelectAnnotation();

  const modifyInteractionRef = useRef<Modify | null>(null);

  const map = useMap();

  const onModifyEnd = useCallback((event: ModifyEvent) => {
    if (props.onChange) {
      props.onChange(event);
    }
  }, []);

  useEffect(() => {
    if (clickedAnnotation && props.isActive) {
      if (!modifyInteractionRef.current) {
        modifyInteractionRef.current = new Modify({
          features: new Collection([clickedAnnotation]),
          deleteCondition: doubleClick,
        });
        modifyInteractionRef.current.on("modifyend", onModifyEnd);
        map.addInteraction(modifyInteractionRef.current);
      }
    } else {
      if (modifyInteractionRef.current) {
        modifyInteractionRef.current.un("modifyend", onModifyEnd);
        map.removeInteraction(modifyInteractionRef.current);
        modifyInteractionRef.current = null;
      }
    }

    return () => {
      if (modifyInteractionRef.current) {
        modifyInteractionRef.current.un("modifyend", onModifyEnd);
        map.removeInteraction(modifyInteractionRef.current);
        modifyInteractionRef.current = null;
      }
    };
  }, [clickedAnnotation, map, props.isActive]);

  return (
    <Button {...props}>
      <ModifyIcon />
    </Button>
  );
}
