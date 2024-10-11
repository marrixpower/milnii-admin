import { styled } from 'styled-components';
import { TButtonStyledProps } from './types';
import { Link } from 'react-router-dom';

export const ButtonStyled = styled.button<TButtonStyledProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ color, disabled, theme }) =>
    !disabled ? color : theme.colors.greyColorText};
  border-radius: 8px;
  padding: ${({ $padding }) => $padding};
  display: flex;
  gap: 8px;
  cursor: pointer;
  margin: ${({ $margin }) => $margin};
  justify-content: ${({ $justifyCont }) => $justifyCont};
  align-items: center;
  border: 1px solid
    ${({ theme, $borderColor, disabled }) =>
      !disabled
        ? !$borderColor
          ? theme.colors.primaryBlue
          : $borderColor
        : theme.colors.disabledGrey};
  background-color: ${({ fill, theme, disabled }) =>
    !disabled ? fill : theme.colors.disabledGrey};
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ theme, disabled, $mouseHoverBg }) =>
      !disabled
        ? $mouseHoverBg || theme.colors.hoverButton
        : theme.colors.disabledGrey};
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const LinkButton = styled(Link)<TButtonStyledProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 8px;
  gap: 8px;
  display: flex;
  cursor: pointer;
  padding: ${({ $padding }) => $padding};
  justify-content: ${({ $justifyCont }) => $justifyCont};
  align-items: center;
  border: 1px solid
    ${({ theme, $borderColor }) =>
      !$borderColor ? theme.colors.primaryBlue : $borderColor};
  background-color: ${({ fill }) => fill};
  color: ${({ color }) => color};
  background-color: ${({ fill }) => fill};
  margin: ${({ $margin }) => $margin};
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ theme, $mouseHoverBg }) =>
      $mouseHoverBg || theme.colors.hoverButton};
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;
