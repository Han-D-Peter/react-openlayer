import React from "react";
import { Children, ReactElement, cloneElement } from "react";
import { Button } from "../element/Button";

export interface ControlGroupProps {
  children:
    | ReactElement<typeof Button>
    | (boolean | ReactElement<typeof Button>)[];
}
export const ControlGroup = ({ children }: ControlGroupProps) => {
  const onlyChildren = Children.toArray(children).filter((child) => child) as
    | ReactElement<typeof Button>
    | (boolean | ReactElement<typeof Button>)[];
  return (
    <div style={{ margin: "10px 0 10px 0 " }}>
      {Children.map(onlyChildren, (child, index) => {
        if (typeof child === "boolean" || child === null) {
          return null;
        }
        if (Children.count(children) === 1) {
          const props = { ...child.props, side: "solo" };
          return cloneElement(child, props);
        }
        if (index === 0) {
          const props = { ...child.props, side: "top" };
          return cloneElement(child, props);
        }
        if (index === Children.toArray(children).length - 1) {
          const props = { ...child.props, side: "bottom" };
          return cloneElement(child, props);
        }
        return child;
      })}
    </div>
  );
};
