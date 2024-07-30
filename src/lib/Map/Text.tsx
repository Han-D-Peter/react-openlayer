import React from "react";

export interface InnerTextProps {
  color?: string;
  size?: number;
  outline?: boolean;
  children: string;
  isPopup?: boolean;
  upperText?: boolean;
}

export function InnerText({
  color,
  size,
  outline,
  children,
  isPopup = false,
  upperText = false,
}: InnerTextProps) {
  return <></>;
}
