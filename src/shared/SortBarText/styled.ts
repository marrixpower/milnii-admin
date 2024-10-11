import styled from 'styled-components';

export const StyledSortText = styled.div<{
  $active: boolean;
  $asc: boolean;
}>`
  cursor: pointer;
  width: 100%;
  display: flex;
  /* align-items: center; */
  gap: 8px;
  p {
    padding-top: 2px;
    color: ${({ theme, $active }) =>
      $active ? theme.colors.primaryBlue : 'inherit'};
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      transition: rotate 0.3s;
      width: 20px;
      height: 20px;
      color: ${({ theme, $active }) =>
        $active ? theme.colors.primaryBlue : 'inherit'};
      rotate: ${({ $active, $asc }) => ($active && $asc ? 0 : '180deg')};
    }
  }
`;
