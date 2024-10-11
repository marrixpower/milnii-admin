import { Container } from 'shared';
import styled from 'styled-components';

export const LayoutWrap = styled(Container)`
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;
export const MainStyled = styled(Container).attrs({ as: 'main' })`
  width: 100%;
  margin: 64px 0 0 222px;
  @media (min-width: 1200px) {
    margin: 64px 0 0 228px;
  }
  @media (min-width: 1440px) {
    margin: 64px 0 0 257px;
  }
`;
