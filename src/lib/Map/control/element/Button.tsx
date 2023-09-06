import React, { ButtonHTMLAttributes, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ReactNode, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;

  /**
   * @default "middle"
   * @description You can set this property for using buttons multiful. This property change css of button(border-radius)
   */
  side?: "top" | "bottom" | "middle" | "solo";
  isActive?: boolean;
  hasPopup?: boolean;
  popupText?: string;
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
  width: 40px;
  height: 40px;
  background: white;
  border: 0;
  border-radius: ${(props) => getborderRadiusBySide(props.side)};
  box-shadow: 0px 3px 4px 0px #959595;
`;

const ButtonContainer = styled.div`
  position: relative;
`;
const ButtonPopup = styled.div`
  opacity: 0.7;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  position: absolute;
  background-color: #3c3c3c;
  height: 27px;
  color: #d7d7d7;
  white-space: normal;
  /* width: 100px; */
  padding: 0 10px 0 10px;
  top: 6px;
  left: 50px;
  /* box-shadow: 0px 3px 4px 0px #959595; */
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      hasPopup = false,
      popupText,
      children,
      onClick,
      side = "middle",
      isDisabled = false,
      isActive = false,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const [isHover, setIsHover] = useState(false);
    const onClickBtn = () => {
      if (onClick) {
        onClick();
      }
    };

    return (
      <ButtonContainer>
        <StyledButton
          ref={ref}
          onClick={onClickBtn}
          onMouseMove={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          side={side}
          isDisabled={isDisabled}
          active={isActive}
          {...props}
        >
          {children}
        </StyledButton>
        {hasPopup && isHover && <ButtonPopup>{popupText}</ButtonPopup>}
      </ButtonContainer>
    );
  }
);
