export type SortTextProps = {
  active: boolean;
  asc: boolean;
  label: string;
  onLabelClick?: () => void;
  onArrowClick: () => void;
};
