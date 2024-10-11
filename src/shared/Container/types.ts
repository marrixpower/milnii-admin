export type ContainerProps = {
  as?: React.ElementType;
  width?: string;
  height?: string;
  $maxWidth?: string;
  $minWidth?: string;
  $padding?: string;
  $gap?: string;
  $margin?: string;
  $bgColor?: string;
  $flexDirection?: 'row' | 'column';
  $justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  $alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  $position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
  $zIndex?: number | string;
  $overflow?: 'hidden' | 'auto' | 'visible' | 'scroll';
  color?: string;
  $flexWrap?: string;
  $borderRadius?: string;
  $fontWeight?: string;
  $fontSize?: string;
};
