import styled from 'styled-components';

export const PhotoWrap = styled.div`
  p {
    font-weight: 600;
    margin-bottom: 8px;
  }
`;
export const DescriptionWrap = styled(PhotoWrap)<{ $error: boolean }>`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  textarea {
    width: 100%;
    height: 90px;
    overflow: auto;
    outline: none;
    border: 1px solid
      ${({ theme, $error }) =>
        !$error ? theme.colors.borderInputGrey : theme.colors.errorRed};
    padding: 8px;
    border-radius: 8px;
  }
  span {
    position: absolute;
    top: 120px;
    color: ${({ theme }) => theme.colors.errorRed};
    font-size: 12px;
  }
`;
