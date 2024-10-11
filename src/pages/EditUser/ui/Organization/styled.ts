import { Container } from 'shared/index';
import styled from 'styled-components';

export const OrganizationWrap = styled(Container)`
  flex-direction: column;
  max-width: 751px;
  border-right: 1px solid ${({ theme }) => theme.colors.borderInputGrey};
  padding: 20px;
  margin: 0;
  h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  @media (min-width: 1440px) {
    border-right: none;
    max-width: 420px;
  }
`;
