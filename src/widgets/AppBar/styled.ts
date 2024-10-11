import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 213px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  box-shadow: 0px 6px 12px -1px rgba(129, 129, 129, 0.14);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  @media (min-width: 1440px) {
    width: 237px;
    padding: 20px;
  }
`;
export const StyledLogo = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    position: absolute;
    height: 1px;
    display: block;
    width: 270px;
    left: -20px;
    bottom: -55px;
    background-color: #ededed;
    @media (min-width: 1440px) {
      bottom: -45px;
    }
  }

  img {
    position: absolute;
    top: 0;
    margin-top: 0;
    width: 140px;
    height: 40px;
    @media (min-width: 1440px) {
      top: -10px;
    }
  }
`;

export const StyledNavlink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  gap: 8px;
  white-space: wrap;
  overflow-wrap: break-word;
  font-weight: 400;
  svg {
    width: 24px;
    height: 24px;
  }
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryBlue};
  }
  &.active {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primaryBlue};
    &::before {
      content: '';
      position: absolute;
      left: 4px;
      width: 2px;
      background-color: ${({ theme }) => theme.colors.primaryBlue};
      height: 40px;
      display: block;
      z-index: 3;
    }
  }
`;
export const Nav = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
  line-height: 1.43;
  margin-top: 60px;
  @media (min-width: 1440px) {
    margin-top: 50px;
  }
`;
export const ExitBtn = styled.button`
  margin-top: auto;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.errorRed};
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 0;
  svg {
    margin-right: 8px;
    width: 25px;
    height: 25px;
  }
`;
