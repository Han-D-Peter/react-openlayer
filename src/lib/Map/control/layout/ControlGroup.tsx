import { Children, ReactElement, cloneElement } from "react";
import Button from "../element/Button";

interface ControlGroupProps {
  children:
    | ReactElement<typeof Button>
    | (boolean | ReactElement<typeof Button>)[];
}
const ControlGroup = ({ children }: ControlGroupProps) => {
  return (
    <div style={{ margin: "10px 0 10px 0 " }}>
      {Children.map(children, (child, index) => {
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

export default ControlGroup;
