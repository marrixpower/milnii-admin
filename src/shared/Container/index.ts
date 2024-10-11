import styled from 'styled-components';
import { ContainerProps } from './types';

export const Container = styled.div<ContainerProps>`
  display: flex;
  gap: ${props => props.$gap};
  height: ${props => props.height};
  width: ${props => props.width};
  max-width: ${props => props.$maxWidth};
  min-width: ${props => props.$minWidth};
  padding: ${props => props.$padding};
  margin: ${props => props.$margin};
  background-color: ${props => props.$bgColor};
  flex-direction: ${props => props.$flexDirection};
  justify-content: ${props => props.$justifyContent};
  align-items: ${props => props.$alignItems};
  position: ${props => props.$position};
  top: ${props => props.$top};
  right: ${props => props.$right};
  bottom: ${props => props.$bottom};
  left: ${props => props.$left};
  z-index: ${props => props.$zIndex};
  overflow: ${props => props.$overflow};
  color: ${props => props.color};
  flex-wrap: ${props => props.$flexWrap};
  border-radius: ${props => props.$borderRadius};
  font-weight: ${props => props.$fontWeight};
  font-size: ${props => props.$fontSize};
`;

Container.defaultProps = {
  width: '100%',
  height: 'auto',
  $maxWidth: 'none',
  $padding: '0',
  $margin: '0',
  $bgColor: 'transparent',
  $justifyContent: 'flex-start',
  $alignItems: 'flex-start',
  $gap: '0',
  $minWidth: 'none',
  $position: 'static',
  $top: 'auto',
  $right: 'auto',
  $bottom: 'auto',
  $left: 'auto',
  $zIndex: 'auto',
  $overflow: 'visible',
  $flexWrap: 'nowrap',
  $borderRadius: '0',
};
