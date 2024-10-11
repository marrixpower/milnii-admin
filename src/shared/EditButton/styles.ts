import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonWrap = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverButton};
  }
  svg {
    color: ${({ theme }) => theme.colors.white};
    width: 22px;
    height: 22px;
  }
`;
