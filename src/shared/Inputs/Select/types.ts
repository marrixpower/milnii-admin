export type TSelectProps = {
  width?: string;
  height?: string;
  options?: { label: string; value: string }[];
  label?: string;
  value?: { label: string; value: string };
  onChange?: (option: { label: string; value: string } | unknown) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  defaultValue?: { label: string; value: string };
  isClearable?: boolean;
  menuPortalTarget?: HTMLElement;
};
export type TStyledSelectProps = { width?: string; height?: string };
export type TProps = {
  width?: string;
  height?: string;
};
