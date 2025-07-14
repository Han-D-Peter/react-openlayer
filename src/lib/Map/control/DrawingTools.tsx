import React, { ReactNode, useEffect } from "react";
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
import { TranslateEvent } from "ol/interaction/Translate";
import { ModifyEvent } from "ol/interaction/Modify";
import { useMap } from "../hooks";
import { ANNOTATION_COLOR } from "../constants";
import { FeatureFromGeojson } from "../FeaturesStore";

type FeatureMode = boolean | "disabled";
export interface DrawingToolsProps {
  multiMarker?: FeatureMode;
  marker?: FeatureMode;
  polyline?: FeatureMode;
  rectangle?: FeatureMode;
  polygon?: FeatureMode;
  text?: FeatureMode;
  target?: Feature<Geometry> | null;
  edit?: FeatureMode;
  movement?: FeatureMode;
  color?: keyof typeof ANNOTATION_COLOR;
  remove?: FeatureMode;
  onDrawStart?: () => void;
  onDelete?: (event: FeatureFromGeojson | undefined) => void;
  onMove?: (event: TranslateEvent) => void;
  onModify?: (event: ModifyEvent) => void;
  onDrawEnd?: (event: FeatureFromGeojson) => void;
  onCanvas?: boolean;
  children?: ReactNode;
  arrange?: "vertical" | "horizontal";
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
  arrange = "vertical",
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

  const endDrawing = (event: FeatureFromGeojson) => {
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
    <div
      style={arrange === "horizontal" ? { display: "flex", gap: "10px" } : {}}
    >
      <ControlGroup>
        {multiMarker === true && (
          <MultiPointDrawButton
            // isActive={isSelected === "0"}
            onEnd={endDrawing}
            // onClick={() => {
            //   switchControl("0");
            // }}
            onCanvas={onCanvas}
          />
        )}
        {multiMarker === "disabled" && (
          <MultiPointDrawButton
            disabled
            // isActive={isSelected === "0"}
            onEnd={endDrawing}
            // onClick={() => {
            //   switchControl("0");
            // }}
            onCanvas={onCanvas}
          />
        )}
        {marker === true && (
          <PointDrawButton
            // isActive={isSelected === "1"}
            onEnd={endDrawing}
            // onClick={() => {
            //   switchControl("1");
            // }}
            onCanvas={onCanvas}
          />
        )}
        {marker === "disabled" && (
          <PointDrawButton
            disabled
            // isActive={isSelected === "1"}
            onEnd={endDrawing}
            // onClick={() => {
            //   switchControl("1");
            // }}
            onCanvas={onCanvas}
          />
        )}
        {polyline === true && (
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
        {polyline === "disabled" && (
          <PolylineDrawButton
            disabled
            color={color}
            // isActive={isSelected === "2"}
            // onClick={() => {
            //   switchControl("2");
            // }}
            onEnd={endDrawing}
            onCanvas={onCanvas}
          />
        )}
        {rectangle === true && (
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
        {rectangle === "disabled" && (
          <RectangleDrawButton
            disabled
            color={color}
            // isActive={isSelected === "3"}
            // onClick={() => {
            //   switchControl("3");
            // }}
            onEnd={endDrawing}
            onCanvas={onCanvas}
          />
        )}
        {polygon === true && (
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
        {polygon === "disabled" && (
          <PolygonDrawButton
            disabled
            color={color}
            // isActive={isSelected === "4"}
            // onClick={() => {
            //   switchControl("4");
            // }}
            onEnd={endDrawing}
            onCanvas={onCanvas}
          />
        )}
        {text === true && (
          <TextDrawButton
            // isActive={isSelected === "5"}
            // onClick={() => {
            //   switchControl("5");
            // }}
            onEnd={endDrawing}
            onCanvas={onCanvas}
          />
        )}
        {text === "disabled" && (
          <TextDrawButton
            disabled
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
        {edit === true && (
          <ModifyAnnotation
            target={target}
            // isActive={isSelected === "6"}
            // onClick={() => {
            //   switchControl("6");
            // }}
            onModifyChange={onModify}
          />
        )}
        {edit === "disabled" && (
          <ModifyAnnotation
            disabled
            target={target}
            // isActive={isSelected === "6"}
            // onClick={() => {
            //   switchControl("6");
            // }}
            onModifyChange={onModify}
          />
        )}
        {movement === true && (
          <MoveAnnotation
            target={target}
            // isActive={isSelected === "7"}
            // onClick={() => {
            //   switchControl("7");
            // }}
            onMoveChange={onMove}
          />
        )}
        {movement === "disabled" && (
          <MoveAnnotation
            disabled
            target={target}
            // isActive={isSelected === "7"}
            // onClick={() => {
            //   switchControl("7");
            // }}
            onMoveChange={onMove}
          />
        )}
        {remove === true && (
          <DeleteAnnotation
            // isActive={isSelected === "8"}
            // onClick={() => {
            //   switchControl("8");
            // }}
            onDeleteChange={onDelete}
          />
        )}
        {remove === "disabled" && (
          <DeleteAnnotation
            disabled
            // isActive={isSelected === "8"}
            // onClick={() => {
            //   switchControl("8");
            // }}
            onDeleteChange={onDelete}
          />
        )}
      </ControlGroup>
    </div>
  );
}
