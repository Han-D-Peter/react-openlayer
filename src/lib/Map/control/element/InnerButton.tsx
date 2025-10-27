/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

const getInnerButtonStyle = (isActive?: boolean) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  min-height: 32px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  ${isActive &&
  css`
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
  `}

  &:hover {
    background-color: ${isActive
      ? "rgba(255, 255, 255, 0.3)"
      : "rgba(0, 0, 0, 0.05)"};
  }

  svg {
    transition: all 0.2s ease-in-out;
    ${isActive &&
    css`
      filter: brightness(0) invert(1);
    `}
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
