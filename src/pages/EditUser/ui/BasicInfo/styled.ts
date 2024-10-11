import { Container } from 'shared/index';
import styled from 'styled-components';

export const BasicInfoWrap = styled(Container)`
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.borderInputGrey};
  width: 751px;
  padding: 20px;
  margin: 0;
  min-height: 470px;
  h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
