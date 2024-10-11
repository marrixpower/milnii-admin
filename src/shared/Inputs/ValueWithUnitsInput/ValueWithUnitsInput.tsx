import { Container } from 'shared/Container';
import { InputUnitsProps } from './types';
import Select from 'react-select';
import {
  ErrorMessage,
  InputWrap,
  LabelInput,
  Title,
  selectStyles,
} from './styled';

export const ValueWithUnitsInput = ({
  onInputChange,
  selectValue,
  onSelectChange,
  placeholder,
  options,
  error,
  inputValue,
  width = '343px',
  label,
  selectPlaceholder,
  inputType,
}: InputUnitsProps) => {
  return (
    <Container
      $position="relative"
      $margin="0"
      width={width}
      $flexDirection="column"
      $gap="8px"
    >
      <Title>{label}</Title>
      <InputWrap>
        <Select
          placeholder={selectPlaceholder}
          styles={selectStyles}
          options={options}
          value={selectValue}
          onChange={onSelectChange}
        />
        <LabelInput $error={error}>
          <input
            type={inputType}
            placeholder={placeholder}
            value={inputValue}
            onChange={onInputChange}
          />
        </LabelInput>
      </InputWrap>
      <ErrorMessage>{error}</ErrorMessage>
    </Container>
  );
};
