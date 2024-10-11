import styled from 'styled-components';
export const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    /* align-items: center; */
    justify-content: center;
    border-radius: 8px;
    height: 36px;
    cursor: pointer;
    user-select: none;
    color: ${({ theme }) => theme.colors.colorText};
    font-size: 14px;
    line-height: 20px;
    svg {
      color: #d6d5d9;
      width: 20px;
      height: 20px;
    }
    li {
      border: 1px solid ${({ theme }) => theme.colors.borderInputGrey};
      &:last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
      &:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
      transition: border-color 250ms;

      &:hover {
        border: 1px solid ${({ theme }) => theme.colors.primaryBlue};
        &:last-child {
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        }
        &:first-child {
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }

        svg {
          transition: color 300ms;
          color: ${({ theme }) => theme.colors.colorText};
        }
      }
      &.active {
        background: ${({ theme }) => theme.colors.primaryBlue};
        color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.primaryBlue};
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 36px;
        width: 44px;
      }
    }
  }
`;
