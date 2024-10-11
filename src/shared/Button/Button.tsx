import { useTheme } from 'styled-components';
import { ButtonStyled, LinkButton } from './styled';
import { TButtonProps } from './types';

export const Button = ({
  width,
  height = '44px',
  type = 'button',
  link = '/',
  onClick,
  purpose = 'button',
  color = '#ffffff',
  children,
  fill,
  $borderColor,
  disabled = false,
  $padding = '16px 28px',
  $margin = '0',
  $justifyCont = 'center',
  mouseHoverBg,
}: TButtonProps) => {
  const theme = useTheme();
  return (
    <>
      {purpose === 'button' ? (
        <ButtonStyled
          fill={fill || theme.colors.primaryBlue}
          onClick={onClick}
          width={width}
          height={height}
          type={type}
          color={color}
          $borderColor={$borderColor}
          disabled={disabled}
          $padding={$padding}
          $margin={$margin}
          $justifyCont={$justifyCont}
          $mouseHoverBg={mouseHoverBg}
        >
          {children}
        </ButtonStyled>
      ) : (
        <LinkButton
          $borderColor={$borderColor}
          fill={fill || theme.colors.primaryBlue}
          to={link}
          width={width}
          height={height}
          color={color}
          $padding={$padding}
          $margin={$margin}
          $justifyCont={$justifyCont}
          $mouseHoverBg={mouseHoverBg}
        >
          {children}
        </LinkButton>
      )}
    </>
  );
};
