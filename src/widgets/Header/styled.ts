import { Container } from 'shared/Container';
import styled from 'styled-components';

export const StyledHeader = styled(Container).attrs({ as: 'header' })`
  box-shadow: 0px 6px 12px -1px rgba(129, 129, 129, 0.14);
  align-items: center;
  height: 64px;
  width: calc(100vw - 213px);
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  z-index: 4;
  top: 0;
  left: 213px;
  @media (min-width: 1440px) {
    left: 237px;
    width: calc(100vw - 237px);
  }
`;
