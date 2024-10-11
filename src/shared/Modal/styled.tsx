import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleUp = keyframes`
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const scaleDown = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.9);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
  justify-content: center;
  align-items: center;
  background-color: rgba(85, 85, 85, 0.5);
  z-index: 5;
  opacity: 0;
  opacity: 0;
  animation: ${fadeIn} 300ms ease-in-out forwards;

  &.closing {
    animation: ${fadeOut} 300ms ease-in-out forwards;
  }
`;

export const ModalWindow = styled.div`
  position: relative;

  max-height: 97vh;
  transform: scale(0.9);
  animation: ${scaleUp} 300ms ease-in-out forwards;
  &.closing {
    animation: ${scaleDown} 300ms ease-in-out forwards;
  }
`;
