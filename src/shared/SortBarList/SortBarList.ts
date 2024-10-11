import { Container } from "shared/Container";
import styled from "styled-components";

export const StyledLi = styled.li<{ $minWidth?: string }>`
  width: 100%;
  padding: 16px 20px;
  font-weight: 600;
  font-size: 14px;
  min-width: ${({ $minWidth }) => ($minWidth ? $minWidth : "auto")};
`;

export const SortBarList = styled(Container).attrs({ as: "ul" })`
  width: auto;
  min-width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${({ theme }) => theme.bottomLine};
`;
