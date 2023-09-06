import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

export const InnerButton = styled.div<{
  isActive?: boolean;
  children: ReactNode;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30px;
  min-height: 30px;
  border-radius: 5px;
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: black;
    `}
  &:hover {
    background-color: ${({ isActive }) => (isActive ? "black" : "#eeeeee")};
  }
`;
