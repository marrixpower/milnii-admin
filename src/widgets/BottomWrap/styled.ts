import { styled } from 'styled-components';

export const BottomWrapStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  height: 60px;
  div {
    &:nth-child(1) {
      font-size: 12px;
      /* color: #9e9e9e; */
    }
  }
`;
export const SelectLimit = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 72px;
  height: 36px;
  outline: none;
  background-color: #ffffff;
  transition: border-color 300ms;
  :hover,
  :focus {
    border-color: #6054f4;
  }
  border: 1px solid ${({ theme }) => theme.colors.borderInputGrey};
  border-radius: 8px;
  padding: 10px 12px;
  background-image: url('data:image/svg+xml;utf8,<svg width="20" height="20" fill="rgb(44, 117, 200)"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 0.5em center;
  /* background-color: ${({ theme }) => theme.colors.borderInputGrey}; */
  padding-right: 1.5em;
  /* color: ${({ theme }) => theme.colors.white}; */
  &::before {
    content: '';
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #000000;
    position: absolute;
    top: 50%;
    right: 1em;
    transform: translate(0, -50%) translateX(-10px);
  }
`;
export const SelectLimitWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 12px;
  /* color: ${({ theme }) => theme.colors.borderInputGrey}; */
`;
