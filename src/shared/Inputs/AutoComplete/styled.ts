import { CSSObjectWithLabel } from 'react-select';
import styled from 'styled-components';

export const selectStyles = {
  dropdownIndicator: (provided: CSSObjectWithLabel) => ({
    ...provided,
    display: 'none',
  }),
  indicatorSeparator: (provided: CSSObjectWithLabel) => ({
    ...provided,
    display: 'none',
  }),
};

export const Label = styled.p`
  font-weight: 600;
  margin-bottom: 8px;
`;
export const ErrorMessage = styled.p`
  position: absolute;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.errorRed};
`;
