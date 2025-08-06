import { css } from "@emotion/react";
import { ReactNode } from "react";

const getInnerButtonStyle = (isActive?: boolean) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30px;
  min-height: 30px;
  border-radius: 5px;
  ${isActive &&
  css`
    background-color: black;
  `}
  &:hover {
    background-color: ${isActive ? "black" : "#eeeeee"};
  }
`;

export const InnerButton = ({
  isActive,
  children,
}: {
  isActive?: boolean;
  children: ReactNode;
}) => {
  return <div css={getInnerButtonStyle(isActive)}>{children}</div>;
};
