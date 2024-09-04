import React, {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import { ControlGroup } from "./layout/ControlGroup";
import { useState } from "react";
import { PointDrawButton } from "./element/drawing/PointDrawButton";
import { PolylineDrawButton } from "./element/drawing/PolylineDrawButton";
import { RectangleDrawButton } from "./element/drawing/RectangleDrawButton";
import { PolygonDrawButton } from "./element/drawing/PolygonDrawButton";
import { TextDrawButton } from "./element/drawing/TextDrawButton";
import { ModifyAnnotation } from "./element/function/ModifyAnnotation";
import { MoveAnnotation } from "./element/function/MoveAnnotation";
import { DeleteAnnotation } from "./element/function/DeleteAnnotation";
import { MultiPointDrawButton } from "./element/drawing/MultiPointDrawButton";
import { Geometry } from "ol/geom";
import { Feature } from "ol";
import { SelectEvent } from "ol/interaction/Select";
import { TranslateEvent } from "ol/interaction/Translate";
import { ModifyEvent } from "ol/interaction/Modify";
import { useMap } from "../hooks";
import VectorSource from "ol/source/Vector";
import { ANNOTATION_COLOR } from "../constants";

export interface DrawingToolsProps {
  multiMarker?: boolean;
  marker?: boolean;
  polyline?: boolean;
  rectangle?: boolean;
  polygon?: boolean;
  text?: boolean;
  target?: Feature<Geometry> | null;
  edit?: boolean;
  movement?: boolean;
  color?: keyof typeof ANNOTATION_COLOR;
  remove?: boolean;
  onDrawStart?: () => void;
  onDelete?: (event: SelectEvent) => void;
  onMove?: (event: TranslateEvent) => void;
  onModify?: (event: ModifyEvent) => void;
  onDrawEnd?: (event: Feature<Geometry> | Feature<Geometry>[]) => void;
  onCanvas?: boolean;
  children?: ReactNode;
}

export function DrawingTools({
  color = "BLUE",
  target = null,
  multiMarker = true,
  marker = true,
  polyline = true,
  rectangle = true,
  polygon = true,
  text = true,
  edit = true,
  movement = true,
  remove = true,
  onCanvas = false,
  onDrawEnd,
  onDelete,
  onMove,
  onModify,
  onDrawStart,
  children,
}: DrawingToolsProps) {
  const [isSelected, setIsSelected] = useState<string | null>(null);
  const map = useMap();

  const switchControl = (key: string) => {
    if (isSelected === key) {
      setIsSelected(null);
      map.setProperties({ isDrawing: false });
    }
    if (isSelected !== key) {
      if (onDrawStart) onDrawStart();

      setIsSelected(key);
    }
  };

  const endDrawing = (event: Feature<Geometry> | Feature<Geometry>[]) => {
    if (onDrawEnd) {
      onDrawEnd(event);
    }
    // setIsSelected(null);
  };

  useEffect(() => {
    if (!isSelected) {
      map.setProperties({ isDrawing: false });
    }
  }, [isSelected, map]);

  return (
    <>
      <ControlGroup>
        {multiMarker && (
          <MultiPointDrawButton
            // isActive={isSelected === "0"}
            onEnd={endDrawing}
            // onClick={() => {
            //   switchControl("0");
            // }}
            onCanvas={onCanvas}
          />
        )}
        {marker && (
          <PointDrawButton
            // isActive={isSelected === "1"}
            onEnd={endDrawing}
            // onClick={() => {
            //   switchControl("1");
            // }}
            onCanvas={onCanvas}
          />
        )}
        {polyline && (
          <PolylineDrawButton
            color={color}
            // isActive={isSelected === "2"}
            // onClick={() => {
            //   switchControl("2");
            // }}
            onEnd={endDrawing}
            onCanvas={onCanvas}
          />
        )}
        {rectangle && (
          <RectangleDrawButton
            color={color}
            // isActive={isSelected === "3"}
            // onClick={() => {
            //   switchControl("3");
            // }}
            onEnd={endDrawing}
            onCanvas={onCanvas}
          />
        )}
        {polygon && (
          <PolygonDrawButton
            color={color}
            // isActive={isSelected === "4"}
            // onClick={() => {
            //   switchControl("4");
            // }}
            onEnd={endDrawing}
            onCanvas={onCanvas}
          />
        )}
        {text && (
          <TextDrawButton
            // isActive={isSelected === "5"}
            // onClick={() => {
            //   switchControl("5");
            // }}
            onEnd={endDrawing}
            onCanvas={onCanvas}
          />
        )}
      </ControlGroup>
      <ControlGroup>
        {edit && (
          <ModifyAnnotation
            target={target}
            // isActive={isSelected === "6"}
            // onClick={() => {
            //   switchControl("6");
            // }}
            onModifyChange={onModify}
          />
        )}
        {movement && (
          <MoveAnnotation
            target={target}
            // isActive={isSelected === "7"}
            // onClick={() => {
            //   switchControl("7");
            // }}
            onMoveChange={onMove}
          />
        )}
        {remove && (
          <DeleteAnnotation
            // isActive={isSelected === "8"}
            // onClick={() => {
            //   switchControl("8");
            // }}
            onDeleteChange={onDelete}
          />
        )}
      </ControlGroup>
    </>
  );
}
