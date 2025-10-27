/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes, MouseEvent, useState } from "react";
import { css } from "@emotion/react";
import { ReactNode, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  isDisabled?: boolean;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;

  /**
   * @default "middle"
   * @description You can set this property for using buttons multiful. This property change css of button(border-radius)
   */
  side?: "top" | "bottom" | "middle" | "solo";

  /**
   * @default "md"
   */
  size?: "xs" | "sm" | "md" | "lg" | "xlg";
  isActive?: boolean;
  hasPopup?: boolean;
  popupText?: string;
}

const getborderRadiusBySide = (side: "top" | "bottom" | "middle" | "solo") => {
  if (side === "top") {
    return "4px 4px 0 0";
  }

  if (side === "middle") {
    return "0";
  }

  if (side === "bottom") {
    return "0 0 4px 4px";
  }
  if (side === "solo") {
    return "4px 4px 4px 4px";
  }
};

const buttonSize = {
  xs: "32px",
  sm: "36px",
  md: "44px",
  lg: "48px",
  xlg: "52px",
};

const getStyledButtonStyle = (
  side: "top" | "bottom" | "middle" | "solo",
  size: "xs" | "sm" | "md" | "lg" | "xlg",
  isDisabled: boolean,
  active?: boolean
) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${buttonSize[size]};
  height: ${buttonSize[size]};
  background: ${active ? "#007bff" : "#ffffff"};
  border-top: ${side === "top" || side === "solo"
    ? active
      ? "1px solid #007bff"
      : "1px solid #e0e0e0"
    : "none"};
  border-bottom: ${side === "bottom" || side === "solo"
    ? active
      ? "1px solid #007bff"
      : "1px solid #e0e0e0"
    : "none"};
  border-left: 1px solid rgba(0, 0, 0, 0.12);
  border-right: 1px solid rgba(0, 0, 0, 0.12);

  border-radius: ${getborderRadiusBySide(side)};
  box-shadow: ${active
    ? "0 4px 8px rgba(0, 123, 255, 0.3)"
    : "0 2px 4px rgba(0, 0, 0, 0.1)"};
  cursor: ${isDisabled ? "not-allowed" : "pointer"};
  opacity: ${isDisabled ? 0.5 : 1};
  position: relative;

  &:hover {
    background: ${active ? "#0056b3" : "#f8f9fa"};
    outline: none;
    border: none;
    box-shadow: ${active
      ? "0 6px 12px rgba(0, 123, 255, 0.4)"
      : "0 4px 8px rgba(0, 0, 0, 0.15)"};
  }
`;

const buttonContainerStyle = css`
  position: relative;
`;

const buttonPopupStyle = css`
  opacity: 0.9;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  position: absolute;
  background-color: #2c3e50;
  height: 28px;
  color: #ffffff;
  white-space: nowrap;
  padding: 0 12px;
  top: 8px;
  left: 52px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  transition: all 0.2s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid #2c3e50;
  }
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
      size = "sm",
      ...props
    }: ButtonProps,
    ref
  ) => {
    const [isHover, setIsHover] = useState(false);
    const onClickBtn = (e: MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <div css={buttonContainerStyle}>
        <button
          ref={ref}
          onClick={onClickBtn}
          onMouseMove={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          css={getStyledButtonStyle(side, size, isDisabled, isActive)}
          {...props}
        >
          {children}
        </button>
        {hasPopup && isHover && <div css={buttonPopupStyle}>{popupText}</div>}
      </div>
    );
  }
);
