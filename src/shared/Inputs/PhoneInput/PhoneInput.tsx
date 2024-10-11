'use client';
import { ChangeEventHandler } from 'react';
import InputMask from 'react-input-mask';
import { ErrorMessage, Label } from './styled';

type TProps = {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  mask?: string | (string | RegExp)[];
  defaultValue?: string | number | readonly string[];
  placeholder?: string;
  error?: string;
  width?: string;
  height?: string;
  label?: string;
  $bottomError?: string;
  disabled?: boolean;
};

export const PhoneInput = ({
  onChange,
  value,
  mask = '+380 (99) 999 99 99',
  width = '335px',
  placeholder,
  error,
  height = '44px',
  label,
  $bottomError = '-16px',
  disabled = false,
}: TProps) => {
  return (
    <Label height={height} width={width} $error={!!error}>
      {label && <span>{label}</span>}
      <InputMask
        disabled={disabled}
        mask={mask}
        placeholder={placeholder}
        maskChar={null}
        value={value || ''}
        onChange={onChange}
      />
      {error && (
        <ErrorMessage $bottomError={$bottomError}>{error}</ErrorMessage>
      )}
    </Label>
  );
};
