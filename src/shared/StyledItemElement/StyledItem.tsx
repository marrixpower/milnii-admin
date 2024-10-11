import styled from 'styled-components';

export const StyledItem = styled.li`
  font-size: 14px;
  display: flex;
  min-width: 100%;
  height: 68px;
  border-bottom: ${({ theme }) => theme.bottomLine};
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;
