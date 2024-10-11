import styled from 'styled-components';
export const CheckBoxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  min-width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.colors.borderInputGrey};
  border-radius: 3px;
  cursor: pointer;
  background-color: transparent;
  &#checked {
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    svg {
      width: 18px;
      height: 18px;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
