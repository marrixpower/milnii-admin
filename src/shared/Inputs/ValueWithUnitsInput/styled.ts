import { CSSObjectWithLabel, ControlProps, OptionProps } from 'react-select';
import styled from 'styled-components';

export const Title = styled.p`
  font-size: 14px;
  font-weight: 600;
`;
export const InputWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;
export const LabelInput = styled.label<{ $error?: string }>`
  width: 100%;
  input {
    height: 44px;
    padding: 8px 12px;
    width: 100%;
    outline: none;
    transition: border-color 0.2s;
    border: 1px solid
      ${({ theme, $error }) =>
        !$error ? theme.colors.borderInputGrey : theme.colors.errorRed};
    border-radius: 0px 8px 8px 0px;
    &:focus {
      border: 1px solid
        ${({ theme, $error }) =>
          !$error ? theme.colors.colorText : theme.colors.errorRed};
    }
  }
`;
export const ErrorMessage = styled.div`
  position: absolute;
  font-size: 12px;
  left: 78px;
  bottom: -15px;
  color: ${({ theme }) => theme.colors.errorRed};
`;

export const selectStyles = {
  valueContainer: (provided: CSSObjectWithLabel) => ({
    ...provided,
    padding: '0px',

    height: '44px',
    width: '78px',
  }),

  control: (
    provided: CSSObjectWithLabel,
    state: ControlProps<{ label: string; value: string }>
  ) => ({
    ...provided,
    height: '44px',
    width: '78px',

    padding: ' 0 4px',
    borderRadius: '8px 0 0 8px',
    boxShadow: 'none',
    border:
      state.isFocused || state.menuIsOpen
        ? '1px solid #333333'
        : '1px solid #CACACA',
    '&:hover': {
      border:
        state.isFocused || state.menuIsOpen ? '1px solid #333333' : undefined,
    },
  }),

  indicatorSeparator: (provided: CSSObjectWithLabel) => ({
    ...provided,
    display: 'none',
  }),

  dropdownIndicator: (provided: CSSObjectWithLabel) => ({
    ...provided,
    padding: '0',
    display: 'flex',
    color: '#9E9E9E',
    marginBottom: '3px',
  }),

  menu: (base: CSSObjectWithLabel) => ({
    ...base,
    width: '78px',
    overflow: 'auto',
  }),

  option: (
    provided: CSSObjectWithLabel,
    state: OptionProps<{ label: string; value: string }>
  ) => ({
    ...provided,

    backgroundColor: state.isSelected
      ? '#145094'
      : state.isFocused
      ? '#5B96DA'
      : provided.backgroundColor,
    color: state.isSelected || state.isFocused ? 'white' : provided.color,
    '&:active': {
      backgroundColor: state.isSelected ? '#145094' : provided.backgroundColor,
      color: state.isSelected ? 'white' : provided.color,
    },
  }),

  singleValue: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: '#333333',
    fontWeight: '600',
    height: '22px',
  }),
};
