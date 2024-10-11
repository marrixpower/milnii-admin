import styled from 'styled-components';
import { Container } from '..';

export const UploadWrap = styled(Container)<{
  $round?: boolean;
  $error: boolean;
}>`
  align-items: center;
  margin: 0;
  gap: 8px;
  cursor: pointer;
  color: ${({ theme, $error }) =>
    !$error ? theme.colors.primaryBlue : theme.colors.errorRed};
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border: 1px dashed
    ${({ theme, $error }) =>
      !$error ? theme.colors.primaryBlue : theme.colors.errorRed};
  background-color: ${({ theme }) => theme.colors.lightBlueBackground};
  border-radius: ${({ $round }) => ($round ? '50%' : '8px')};
  p {
    font-weight: 600;
    font-size: 14px;
  }
  svg {
    width: 22px;
    height: 22px;
  }
`;
