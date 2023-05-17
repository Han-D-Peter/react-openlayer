import styled from "@emotion/styled";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
  side?: "top" | "bottom" | "middle";
}

const getborderRadiusBySide = (side: "top" | "bottom" | "middle") => {
  if (side === "top") {
    return "5px 5px 0 0";
  }

  if (side === "middle") {
    return "0";
  }

  if (side === "bottom") {
    return "0 0 5px 5px";
  }
};

const StyledButton = styled.button<{
  side: "top" | "bottom" | "middle";
  isDisabled: boolean;
}>`
  display: block;
  width: 30px;
  height: 30px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: ${(props) => getborderRadiusBySide(props.side)};
  &:hover {
    border: 1px solid ${(props) => (props.isDisabled ? "#d9d9d9" : "#000000")};
  }
`;

const Button = ({
  children,
  onClick,
  side = "middle",
  isDisabled = false,
}: ButtonProps) => {
  const onClickBtn = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledButton onClick={onClickBtn} side={side} isDisabled={isDisabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
