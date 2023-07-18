import React from "react";
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

export interface DrawingToolsProps {
  multiMarker?: boolean;
  marker?: boolean;
  polyline?: boolean;
  rectangle?: boolean;
  polygon?: boolean;
  text?: boolean;

  edit?: boolean;
  movement?: boolean;
  remove?: boolean;
  onDrawStart?: () => void;
  onDelete?: (event: SelectEvent) => void;
  onMove?: (event: TranslateEvent) => void;
  onModify?: (event: ModifyEvent) => void;
  onDrawEnd?: (event: Feature<Geometry> | Feature<Geometry>[]) => void;
  onCanvas?: boolean;
}

export function DrawingTools({
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
}: DrawingToolsProps) {
  const [isSelected, setIsSelected] = useState<number | null>(null);

  const switchControl = (key: number) => {
    if (isSelected === key) {
      setIsSelected(null);
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
    setIsSelected(null);
  };
  return (
    <>
      <ControlGroup>
        {multiMarker && (
          <MultiPointDrawButton
            isActive={isSelected === 0}
            onEnd={endDrawing}
            onClick={() => {
              switchControl(0);
            }}
            onCanvas={onCanvas}
          />
        )}
        {marker && (
          <PointDrawButton
            isActive={isSelected === 1}
            onEnd={endDrawing}
            onClick={() => {
              switchControl(1);
            }}
            onCanvas={onCanvas}
          />
        )}
        {polyline && (
          <PolylineDrawButton
            isActive={isSelected === 2}
            onClick={() => {
              switchControl(2);
            }}
            onEnd={endDrawing}
            onCanvas={onCanvas}
          />
        )}
        {rectangle && (
          <RectangleDrawButton
            isActive={isSelected === 3}
            onClick={() => {
              switchControl(3);
            }}
            onEnd={endDrawing}
            onCanvas={onCanvas}
          />
        )}
        {polygon && (
          <PolygonDrawButton
            isActive={isSelected === 4}
            onClick={() => {
              switchControl(4);
            }}
            onEnd={endDrawing}
            onCanvas={onCanvas}
          />
        )}
        {text && (
          <TextDrawButton
            isActive={isSelected === 5}
            onClick={() => {
              switchControl(5);
            }}
            onEnd={endDrawing}
            onCanvas={onCanvas}
          />
        )}
      </ControlGroup>
      <ControlGroup>
        {edit && (
          <ModifyAnnotation
            isActive={isSelected === 6}
            onClick={() => {
              switchControl(6);
            }}
            onChange={onModify}
          />
        )}
        {movement && (
          <MoveAnnotation
            isActive={isSelected === 7}
            onClick={() => {
              switchControl(7);
            }}
            onChange={onMove}
          />
        )}
        {remove && (
          <DeleteAnnotation
            isActive={isSelected === 8}
            onClick={() => {
              switchControl(8);
            }}
            onChange={onDelete}
          />
        )}
      </ControlGroup>
    </>
  );
}
