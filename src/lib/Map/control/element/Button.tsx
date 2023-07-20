import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ReactNode, forwardRef } from "react";

export interface ButtonProps {
  children?: ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;

  /**
   * @default "middle"
   * @description You can set this property for using buttons multiful. This property change css of button(border-radius)
   */
  side?: "top" | "bottom" | "middle" | "solo";
  isActive?: boolean;
}

const getborderRadiusBySide = (side: "top" | "bottom" | "middle" | "solo") => {
  if (side === "top") {
    return "5px 5px 0 0";
  }

  if (side === "middle") {
    return "0";
  }

  if (side === "bottom") {
    return "0 0 5px 5px";
  }
  if (side === "solo") {
    return "5px 5px 5px 5px";
  }
};

const StyledButton = styled.button<{
  side: "top" | "bottom" | "middle" | "solo";
  isDisabled: boolean;
  active?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ active }) =>
    active &&
    css`
      box-shadow: inset 0 0 5px black;
    `}
  width: 30px;
  height: 30px;
  background: white;
  border: 1px solid #d9d9d9;
  border-radius: ${(props) => getborderRadiusBySide(props.side)};
  &:hover {
    border: 1px solid ${(props) => (props.isDisabled ? "#d9d9d9" : "#000000")};
  }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClick,
      side = "middle",
      isDisabled = false,
      isActive = false,
    }: ButtonProps,
    ref
  ) => {
    const onClickBtn = () => {
      if (onClick) {
        onClick();
      }
    };

    return (
      <StyledButton
        ref={ref}
        onClick={onClickBtn}
        side={side}
        isDisabled={isDisabled}
        active={isActive}
      >
        {children}
      </StyledButton>
    );
  }
);
