import styled from "styled-components";

export const PageWrapper = styled.div`
  max-width: 100%;
  width: calc(100vw - 247px);
  @media (min-width: 1200px) {
    width: calc(100vw - 247px);
  }
  @media (min-width: 1440px) {
    width: calc(100vw - 271px);
  }
  box-shadow: 0px 6px 12px -1px rgba(129, 129, 129, 0.14);
  border-radius: 16px;
  background-color: #ffffff;
  margin-bottom: 20px;
  position: relative;
  &.acute__angle {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`;
