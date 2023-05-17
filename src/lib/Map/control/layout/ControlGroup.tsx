import { Children, ReactElement } from "react";
import Button from "../element/Button";

interface ControlGroupProps {
  children: ReactElement<typeof Button> | ReactElement<typeof Button>[];
}
const ControlGroup = ({ children }: ControlGroupProps) => {
  return (
    <div style={{ margin: "10px 0 10px 0 " }}>
      {Children.map(children, (child, index) => {
        console.log("child", child.props);
        if (index === 0) {
          return (
            <Button side="top" {...child.props}>
              {}
            </Button>
          );
        }
        if (index === Children.toArray(children).length - 1) {
          return (
            <Button side="bottom" {...child.props}>
              {}
            </Button>
          );
        }
        return child;
      })}
    </div>
  );
};

export default ControlGroup;
