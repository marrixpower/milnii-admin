import styled from 'styled-components';

export const Label = styled.label<{
  width: string;
  $error: boolean;
  height: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  top: 0;
  width: ${({ width }) => width};
  color: ${({ theme }) => theme.colors.colorText};
  span {
    margin-bottom: 6px;
    font-size: 16px;
    font-weight: 600;
  }
  input {
    background-color: ${({ theme }) => theme.colors.white};
    transition: border-color 0.2s;
    color: ${({ theme }) => theme.colors.colorText};
    transition: border-color 0.2s;
    font-size: 16px;
    height: ${({ height }) => height};
    border-radius: 8px;
    padding: 0 8px;
    outline: none;
    border: 1px solid
      ${({ theme, $error }) =>
        !$error ? theme.colors.colorText : theme.colors.errorRed};
    &:focus {
      border: 1px solid
        ${({ theme, $error }) =>
          !$error ? theme.colors.colorText : theme.colors.errorRed};
    }
  }
`;
export const ErrorMessage = styled.div<{ $bottomError: string }>`
  position: absolute;
  font-size: 12px;
  bottom: ${({ $bottomError }) => $bottomError};
  color: ${({ theme }) => theme.colors.errorRed};
`;
