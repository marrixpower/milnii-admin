import { Container } from 'shared';
import styled from 'styled-components';

export const ContentWrap = styled(Container)`
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;
