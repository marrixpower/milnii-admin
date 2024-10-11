import styled from 'styled-components';

export const HeadingWrap = styled.div<{ $margin?: string; height?: string }>`
  box-sizing: border-box;
  max-width: 100%;
  width: calc(100vw - 247px);

  @media (min-width: 1200px) {
    width: calc(100vw - 247px);
  }
  @media (min-width: 1440px) {
    width: calc(100vw - 271px);
  }
  justify-content: space-between;
  display: flex;
  align-items: center;
  height: ${({ height }) => height || '32px'};
  margin: ${({ $margin }) => $margin || '24px 0 20px'};
  h2 {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 24px;

    svg {
      color: #241f1f;
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }
`;
