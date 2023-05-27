import Button from "./element/Button";
import ControlGroup from "./layout/ControlGroup";
import { FaMapMarkerAlt, FaEraser } from "react-icons/fa";
import { MdPolyline } from "react-icons/md";
import { TbRectangle } from "react-icons/tb";
import { TbPolygon, TbLetterT } from "react-icons/tb";
import { AiOutlineEdit } from "react-icons/ai";
import { BiMove } from "react-icons/bi";
import { useState } from "react";
import PointDrawButton from "./element/drawing/PointDrawButton";
import { DrawEvent } from "ol/interaction/Draw";
import PolylineDrawButton from "./element/drawing/PolylineDrawButton";
import RectangleDrawButton from "./element/drawing/RectangleDrawButton";
import PolygonDrawButton from "./element/drawing/PolygonDrawButton";
import TextDrawButton from "./element/drawing/TextDrawButton";
import ModifyAnnotation from "./element/function/ModifyAnnotation";
import MoveAnnotation from "./element/function/MoveAnnotation";
import DeleteAnnotation from "./element/function/DeleteAnnotation";
import MultiPointDrawButton from "./element/drawing/MultiPointDrawButton";
import { Geometry } from "ol/geom";
import { Feature } from "ol";

interface DrawingToolsProps {
  marker?: boolean;
  polyline?: boolean;
  rectangle?: boolean;
  polygon?: boolean;
  text?: boolean;

  edit?: boolean;
  movement?: boolean;
  remove?: boolean;
  onDrawEnd?: (event: Feature<Geometry> | Feature<Geometry>[]) => void;
  onCanvas?: boolean;
}

export default function DrawingTools({
  marker,
  polyline,
  rectangle,
  polygon,
  text,
  edit,
  movement,
  remove,
  onCanvas = false,
  onDrawEnd,
}: DrawingToolsProps) {
  const [isSelected, setIsSelected] = useState<number | null>(null);

  const switchControl = (key: number) => {
    if (isSelected === key) {
      setIsSelected(null);
    }
    if (isSelected !== key) {
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
        <MultiPointDrawButton
          isActive={isSelected === 0}
          onEnd={endDrawing}
          onClick={() => {
            switchControl(0);
          }}
          onCanvas={onCanvas}
        />
        <PointDrawButton
          isActive={isSelected === 1}
          onEnd={endDrawing}
          onClick={() => {
            switchControl(1);
          }}
          onCanvas={onCanvas}
        />
        <PolylineDrawButton
          isActive={isSelected === 2}
          onClick={() => {
            switchControl(2);
          }}
          onEnd={endDrawing}
          onCanvas={onCanvas}
        />
        <RectangleDrawButton
          isActive={isSelected === 3}
          onClick={() => {
            switchControl(3);
          }}
          onEnd={endDrawing}
          onCanvas={onCanvas}
        />
        <PolygonDrawButton
          isActive={isSelected === 4}
          onClick={() => {
            switchControl(4);
          }}
          onEnd={endDrawing}
          onCanvas={onCanvas}
        />
        <TextDrawButton
          isActive={isSelected === 5}
          onClick={() => {
            switchControl(5);
          }}
          onEnd={endDrawing}
          onCanvas={onCanvas}
        />
      </ControlGroup>
      <ControlGroup>
        <ModifyAnnotation
          isActive={isSelected === 6}
          onClick={() => {
            switchControl(6);
          }}
        />
        <MoveAnnotation
          isActive={isSelected === 7}
          onClick={() => {
            switchControl(7);
          }}
        />
        <DeleteAnnotation
          isActive={isSelected === 8}
          onClick={() => {
            switchControl(8);
          }}
        />
      </ControlGroup>
    </>
  );
}
