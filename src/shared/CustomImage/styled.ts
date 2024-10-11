import styled from 'styled-components';

export const Wrapper = styled.div<{
  $borderRaduis: string;
  width: string;
  height: string;
}>`
  &.wrapper_image {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    padding: 0;
    width: auto;
    position: relative;
    &:hover {
      button {
        visibility: visible;
        opacity: 1;
      }
    }
    svg {
      width: ${({ width }) => width};
      height: ${({ height }) => height};
      color: ${({ theme }) => theme.colors.greyColorText};
    }
  }
`;

export const StyledImage = styled.img<{
  $borderRaduis: string;
  $pointer: boolean;
  width: string;
  height: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ $borderRaduis }) => $borderRaduis};
  object-fit: cover;
  cursor: ${({ $pointer }) => ($pointer ? 'pointer' : 'default')};
`;
export const DeleteButton = styled.button`
  &.delete_button {
    border: none;
    outline: none;
    position: absolute;
    z-index: 1;
    top: 10px;
    right: 6px;
    width: 18px;
    height: 18px;
    padding: 0;
    margin: 0;
    background-color: transparent;
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
    transition: opacity 0.3s, visibility 0.3s;
    svg {
      color: ${({ theme }) => theme.colors.errorRed};
      width: 18px;
      height: 18px;
    }
  }
`;
