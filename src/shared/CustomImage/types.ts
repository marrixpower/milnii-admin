export type TCustomImageProps = {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
  onSVGClick?: () => void;
  onDeleteClick?: () => void;
  withDeleteIcon?: boolean;
  defaultIcon?: React.ReactNode;
  borderRaduis?: string;
};
