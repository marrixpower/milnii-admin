import { ChangeEvent } from 'react';

export type InputUnitsProps = {
  options?: { value: string; label: string }[];
  inputValue?: string;
  selectValue?: { label: string; value: string };
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSelectChange?: (value: unknown) => void;
  width?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  selectPlaceholder?: string;
  inputType: 'text' | 'number' | 'email' | 'password' | 'date' | 'time';
};
