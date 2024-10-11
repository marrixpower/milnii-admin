import { ReactNode } from 'react';
export type TButtonProps = {
  width?: string;
  height?: string;
  type?: 'button' | 'submit' | 'reset';
  link?: string;
  onClick?: () => void;
  purpose?: 'button' | 'link';
  color?: string;
  children: string | ReactNode;
  fill?: string;
  $borderColor?: string;
  disabled?: boolean;
  $padding?: string;
  $margin?: string;
  $justifyCont?: string;
  mouseHoverBg?: string;
};

export type TButtonStyledProps = {
  width?: string;
  height?: string;
  color?: string;
  fill?: string;
  $borderColor?: string;
  $padding?: string;
  $margin?: string;
  $justifyCont: string;
  $mouseHoverBg?: string;
};
