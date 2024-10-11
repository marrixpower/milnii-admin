import { styled } from 'styled-components';
import { TStyledSelectProps } from './types';

export const SelectWrap = styled.div<TStyledSelectProps>`
  position: relative;
  p {
    margin-bottom: 8px;
    font-weight: 600;
  }
`;
export const ErrorP = styled.p`
  &.error {
    position: absolute;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.errorRed};
    font-weight: 400;
  }
`;
