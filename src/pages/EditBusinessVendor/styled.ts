import { NavLink } from 'react-router-dom';
import { Container } from 'shared/Container';
import styled from 'styled-components';

export const LinkWrapper = styled(Container)`
  flex-direction: row;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
  width: auto;
  margin: 0 auto 0 0;
  flex-wrap: wrap;
`;

export const LinkStyled = styled(NavLink)`
  padding: 0 12px;
  font-size: 14px;
  height: 44px;
  min-width: 150px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.greyColorText};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.greyColorText};
  &.active {
    color: ${({ theme }) => theme.colors.primaryBlue};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primaryBlue};
  }
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryBlue};
  }
`;
