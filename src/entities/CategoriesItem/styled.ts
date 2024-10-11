import { StyledItem } from 'shared/index';
import styled from 'styled-components';

export const CategoriesItemStyled = styled(StyledItem)`
  div {
    padding: 0 20px;
    width: 100%;
    display: flex;

    gap: 8px;
    &:nth-child(1) {
      min-width: 400px;
      align-items: center;
      span {
        width: 50px;
      }
    }
    &:nth-child(2) {
      min-width: 250px;
    }

    &:nth-child(3) {
      min-width: 99px;
      justify-content: flex-end;
    }
  }
`;

export const ViewButton = styled.button`
  width: 46px;
  height: 46px;
  border: none;
  outline: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverButton};
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;
export const DeleteButton = styled(ViewButton)`
  color: ${({ theme }) => theme.colors.errorRed};
  background-color: transparent;

  border: 1px solid ${({ theme }) => theme.colors.errorRed};
  &:hover {
    background-color: transparent;
  }
  margin-right: 30px;
`;

export const ModalWrap = styled.form`
  width: 375px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
