import Select, {
  CSSObjectWithLabel,
  ControlProps,
  OptionProps,
} from 'react-select';
import { ErrorP, SelectWrap } from './styled';
import { TSelectProps } from './types';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

export const SelectInput = ({
  width = '335px',
  height = '44px',
  onChange,
  value,
  options,
  error,
  label,
  disabled = false,
  placeholder,
  defaultValue,
  isClearable = false,
  menuPortalTarget,
}: TSelectProps) => {
  const { t } = useTranslation('users');

  const theme = useTheme();

  const selectStyles = {
    valueContainer: (provided: CSSObjectWithLabel) => ({
      ...provided,
      padding: '0px',

      height,
      width,
    }),

    control: (
      provided: CSSObjectWithLabel,
      state: ControlProps<{ label: string; value: string }>
    ) => ({
      ...provided,
      height,
      width,
      padding: ' 0 4px',
      borderRadius: '8px',
      boxShadow: 'none',
      border: !error
        ? state.isFocused || state.menuIsOpen
          ? `1px solid ${theme.colors.colorText}`
          : `1px solid ${theme.colors.borderInputGrey}`
        : `1px solid ${theme.colors.errorRed}`,
      '&:hover': {
        border:
          state.isFocused || state.menuIsOpen
            ? `1px solid ${theme.colors.colorText}`
            : `1px solid ${theme.colors.borderInputGrey}`,
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
      color: theme.colors.primaryBlue,
    }),

    menu: (base: CSSObjectWithLabel) => ({
      ...base,
      width,
      overflow: 'auto',
    }),

    option: (
      provided: CSSObjectWithLabel,
      state: OptionProps<{ label: string; value: string }>
    ) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? theme.colors.primaryBlue
        : state.isFocused
        ? theme.colors.lightBlueBackground
        : provided.backgroundColor,
      color: state.isSelected ? theme.colors.white : provided.color,
      '&:active': {
        backgroundColor: state.isSelected
          ? theme.colors.primaryBlue
          : provided.backgroundColor,
        color: state.isSelected ? 'white' : provided.color,
      },
    }),

    singleValue: (provided: CSSObjectWithLabel) => ({
      ...provided,
      color: theme.colors.colorText,
      marginBottom: '2px',
    }),
    placeholder: (provided: CSSObjectWithLabel) => ({
      ...provided,
      marginBottom: '2px',
    }),
  };

  return (
    <>
      <SelectWrap width={width} height={height}>
        {label && <p>{label}</p>}
        <Select
          menuPortalTarget={menuPortalTarget}
          options={options}
          noOptionsMessage={() => t('noOptionsAvailable')}
          styles={selectStyles}
          onChange={onChange}
          classNamePrefix="select"
          value={value}
          className="react-select"
          placeholder={placeholder}
          isDisabled={disabled}
          defaultValue={defaultValue}
          isClearable={isClearable}
        />
        {error && <ErrorP className="error">{error}</ErrorP>}
      </SelectWrap>
    </>
  );
};
