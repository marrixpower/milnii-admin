import { InputHTMLAttributes } from "react";

// type for Input
export type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
  width?: string;
  initial?: string;
  height?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  border?: string;
  $background?: string;
  $error?: string;
  hidepassword?: boolean;
  label?: string;
  $padding?: string;
  $bottomError?: string;
};

export type TStyledInputProps = {
  border?: string;
  fill?: string;
  $error?: string;
  $padding: string;
};

// type for style label
export type TStyledLabelProps = {
  width: string;
};
