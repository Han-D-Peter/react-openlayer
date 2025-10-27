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
    color: white;
  `}

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
