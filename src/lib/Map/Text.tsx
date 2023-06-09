import React from "react";

export interface InnerTextProps {
  color?: string;
  size?: number;
  outline?: boolean;
  children: string;
  isPopup?: boolean;
}

export default function InnerText({
  color,
  size,
  outline,
  children,
  isPopup = false,
}: InnerTextProps) {
  return <></>;
}
