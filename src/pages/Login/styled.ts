import { Container } from 'shared/Container';
import styled from 'styled-components';

export const Wrap = styled(Container)`
  align-items: center;
  position: absolute;
  flex-direction: column;
  top: 50%;
  left: 50%;
  width: auto;
  height: auto;

  img {
    width: 101px;
    margin-bottom: 30px;
  }
  transform: translate(-50%, -50%);
`;

export const FormWrap = styled(Container).attrs({ as: 'form' })`
  width: 447px;
  flex-direction: column;
  padding: 56px;
  gap: 24px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 6px 12px -1px rgba(129, 129, 129, 0.14);
  border-radius: 8px;
  h3 {
    display: block;
    font-size: 24px;
    margin: 0 auto 8px;
  }
  button {
    margin-top: 8px;
  }
`;
