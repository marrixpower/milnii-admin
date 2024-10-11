import styled from 'styled-components';

export const Label = styled.label<{
  width?: string;
  height?: string;
  $borderVisible?: boolean;
}>`
  position: relative;
  input {
    border-radius: 8px;
    border: ${({ $borderVisible, theme }) =>
      $borderVisible ? `1px solid ${theme.colors.borderInputGrey}` : 'none'};
    outline: none;
    transition: border-color 0.3s;
    padding: 12px 10px 12px 40px;
    height: ${({ height }) => height || '44px'};
    width: ${({ width }) => width || '315px'};
    &:focus {
      border: ${({ theme, $borderVisible }) =>
        $borderVisible ? `1px solid  ${theme.colors.colorText}` : 'none'};
      + svg {
        color: ${({ theme }) => theme.colors.colorText};
      }
    }
  }
  svg {
    transition: color 0.3s;
    color: ${({ theme }) => theme.colors.borderInputGrey};
    height: 25px;
    width: 25px;
    position: absolute;
    left: 10px;
    top: 9px;
  }
`;
