/** @jsxImportSource @emotion/react */
import { Children, ReactElement, cloneElement } from "react";
import { Button } from "../element/Button";
import { css } from "@emotion/react";

export interface ControlGroupProps {
  title?: string;
  children:
    | ReactElement<typeof Button>
    | (boolean | ReactElement<typeof Button>)[];
}

const controlGroupStyle = css`
  margin: 12px 0;
`;

const titleStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 24px;
  background-color: #f5f5f5;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  line-spacing: 0.14px;
  color: #6c757d;
  letter-spacing: 0.5px;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const buttonGroupStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const ControlGroup = ({ children, title }: ControlGroupProps) => {
  const onlyChildren = Children.toArray(children).filter((child) => child) as
    | ReactElement<typeof Button>
    | (boolean | ReactElement<typeof Button>)[];

  return (
    <div css={controlGroupStyle}>
      {title && <div css={titleStyle}>{title}</div>}
      <div css={buttonGroupStyle}>
        {Children.map(onlyChildren, (child, index) => {
          if (typeof child === "boolean" || child === null) {
            return null;
          }
          if (Children.count(children) === 1) {
            const props = { ...child.props, side: "solo" };
            return cloneElement(child, props);
          }
          if (index === 0 && !title) {
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
    </div>
  );
};
