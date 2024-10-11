import styled from 'styled-components';

export const ModalWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 18px;
  padding: 20px;
  width: 520px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const HeadingWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  p {
    font-weight: 600;
    font-size: 20px;
  }
`;

export const DescriptionWrap = styled.p`
  font-size: 18px;
`;
