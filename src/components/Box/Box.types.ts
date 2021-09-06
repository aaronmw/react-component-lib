import { TINTS_AND_SHADES, Z_INDEXES } from './../_tokens';
import { CORE_COLORS, FONT_SIZES, SPOT_COLORS, UNADJUSTABLE_COLORS } from '../_tokens';
import { BOX_SHADOW_STYLES, GRID_SIZES, TEXT_DECORATIONS, TRANSITION_DURATIONS } from '../_tokens';

export type AnimatableCSSProperty =
  | 'all'
  | 'backdrop-filter'
  | 'background'
  | 'background-color'
  | 'background-position'
  | 'background-size'
  | 'block-size'
  | 'border'
  | 'border-block-end'
  | 'border-block-end-color'
  | 'border-block-end-width'
  | 'border-block-start'
  | 'border-block-start-color'
  | 'border-block-start-width'
  | 'border-bottom'
  | 'border-bottom-color'
  | 'border-bottom-left-radius'
  | 'border-bottom-right-radius'
  | 'border-bottom-width'
  | 'border-color'
  | 'border-end-end-radius'
  | 'border-end-start-radius'
  | 'border-image-outset'
  | 'border-image-slice'
  | 'border-image-width'
  | 'border-inline-end'
  | 'border-inline-end-color'
  | 'border-inline-end-width'
  | 'border-inline-start'
  | 'border-inline-start-color'
  | 'border-inline-start-width'
  | 'border-left'
  | 'border-left-color'
  | 'border-left-width'
  | 'border-radius'
  | 'border-right'
  | 'border-right-color'
  | 'border-right-width'
  | 'border-start-end-radius'
  | 'border-start-start-radius'
  | 'border-top'
  | 'border-top-color'
  | 'border-top-left-radius'
  | 'border-top-right-radius'
  | 'border-top-width'
  | 'border-width'
  | 'bottom'
  | 'box-shadow'
  | 'caret-color'
  | 'clip'
  | 'clip-path'
  | 'color'
  | 'column-count'
  | 'column-gap'
  | 'column-rule'
  | 'column-rule-color'
  | 'column-rule-width'
  | 'column-width'
  | 'columns'
  | 'filter'
  | 'flex'
  | 'flex-basis'
  | 'flex-grow'
  | 'flex-shrink'
  | 'font'
  | 'font-size'
  | 'font-size-adjust'
  | 'font-stretch'
  | 'font-variation-settings'
  | 'font-weight'
  | 'gap'
  | 'grid-column-gap'
  | 'grid-gap'
  | 'grid-row-gap'
  | 'grid-template-columns'
  | 'grid-template-rows'
  | 'height'
  | 'inline-size'
  | 'inset'
  | 'inset-block'
  | 'inset-block-end'
  | 'inset-block-start'
  | 'inset-inline'
  | 'inset-inline-end'
  | 'inset-inline-start'
  | 'left'
  | 'letter-spacing'
  | 'line-clamp'
  | 'line-height'
  | 'margin'
  | 'margin-block-end'
  | 'margin-block-start'
  | 'margin-bottom'
  | 'margin-inline-end'
  | 'margin-inline-start'
  | 'margin-left'
  | 'margin-right'
  | 'margin-top'
  | 'mask'
  | 'mask-border'
  | 'mask-position'
  | 'mask-size'
  | 'max-block-size'
  | 'max-height'
  | 'max-inline-size'
  | 'max-lines'
  | 'max-width'
  | 'min-block-size'
  | 'min-height'
  | 'min-inline-size'
  | 'min-width'
  | 'object-position'
  | 'offset'
  | 'offset-anchor'
  | 'offset-distance'
  | 'offset-path'
  | 'offset-position'
  | 'offset-rotate'
  | 'opacity'
  | 'order'
  | 'outline'
  | 'outline-color'
  | 'outline-offset'
  | 'outline-width'
  | 'padding'
  | 'padding-block-end'
  | 'padding-block-start'
  | 'padding-bottom'
  | 'padding-inline-end'
  | 'padding-inline-start'
  | 'padding-left'
  | 'padding-right'
  | 'padding-top'
  | 'perspective'
  | 'perspective-origin'
  | 'right'
  | 'rotate'
  | 'row-gap'
  | 'scale'
  | 'scroll-margin'
  | 'scroll-margin-block'
  | 'scroll-margin-block-end'
  | 'scroll-margin-block-start'
  | 'scroll-margin-bottom'
  | 'scroll-margin-inline'
  | 'scroll-margin-inline-end'
  | 'scroll-margin-inline-start'
  | 'scroll-margin-left'
  | 'scroll-margin-right'
  | 'scroll-margin-top'
  | 'scroll-padding'
  | 'scroll-padding-block'
  | 'scroll-padding-block-end'
  | 'scroll-padding-block-start'
  | 'scroll-padding-bottom'
  | 'scroll-padding-inline'
  | 'scroll-padding-inline-end'
  | 'scroll-padding-inline-start'
  | 'scroll-padding-left'
  | 'scroll-padding-right'
  | 'scroll-padding-top'
  | 'scroll-snap-coordinate'
  | 'scroll-snap-destination'
  | 'scrollbar-color'
  | 'shape-image-threshold'
  | 'shape-margin'
  | 'shape-outside'
  | 'tab-size'
  | 'text-decoration'
  | 'text-decoration-color'
  | 'text-decoration-thickness'
  | 'text-emphasis'
  | 'text-emphasis-color'
  | 'text-indent'
  | 'text-shadow'
  | 'text-underline-offset'
  | 'top'
  | 'transform'
  | 'transform-origin'
  | 'translate'
  | 'vertical-align'
  | 'visibility'
  | 'width'
  | 'word-spacing'
  | 'z-index'
  | 'zoom';

export type BorderRadius = 'normal' | 'large' | 'circle';

export type BorderStyle = 'normal' | 'thick' | 'dashed';

export type BoxShadow = keyof typeof BOX_SHADOW_STYLES;

export type Color =
  | keyof typeof CORE_COLORS
  | keyof typeof UNADJUSTABLE_COLORS
  | keyof typeof SPOT_COLORS
  | `${keyof typeof CORE_COLORS}--${ColorLightness}`;

export type ColorAdjustment = ColorLightness | `+${ColorLightness}` | `-${ColorLightness}`;

export type ColorLightness = keyof typeof TINTS_AND_SHADES;

export type Cursor =
  | 'auto'
  | 'default'
  | 'none'
  | 'context-menu'
  | 'help'
  | 'pointer'
  | 'progress'
  | 'wait'
  | 'cell'
  | 'crosshair'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'grab'
  | 'grabbing'
  | 'all-scroll'
  | 'col-resize'
  | 'row-resize'
  | 'n-resize'
  | 'e-resize'
  | 's-resize'
  | 'w-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'ew-resize'
  | 'ns-resize'
  | 'nesw-resize'
  | 'nwse-resize'
  | 'zoom-in'
  | 'zoom-out';

export type DisplayMode =
  | 'block'
  | 'inline'
  | 'inline-block'
  | 'grid'
  | 'flex'
  | 'none'
  | 'table'
  | 'table-row'
  | 'table-cell'
  | 'table-header-group'
  | 'table-footer-group'
  | 'table-row-group';

export type FlexAlignment = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type FlexJustification =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'left'
  | 'right'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';

export type FontSize = 0 | keyof typeof FONT_SIZES;

export type FontWeight = 'normal' | 'bold';

export type GridSize = keyof typeof GRID_SIZES;

export type GridSizeOrLength = GridSize | 'auto' | 'unset' | `${number}px` | `${number}%` | number;

export type TextDecoration = keyof typeof TEXT_DECORATIONS;

export type TransitionDuration = keyof typeof TRANSITION_DURATIONS | `${number}ms` | `${number}s` | number;

export type Overflow = 'auto' | 'clip' | 'hidden' | 'scroll' | 'visible';

export type Position = 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';

export type TextAlignment = 'left' | 'right' | 'center' | 'justify';

export type WhiteSpace = 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces';

export type zIndex = keyof typeof Z_INDEXES | number;

export type BoxStyleProps = {
  alignItems?: FlexAlignment;
  alignSelf?: FlexAlignment;
  backgroundColor?: Color;
  backgroundColorLightness?: ColorAdjustment;
  border?: BorderStyle | boolean;
  borderBottom?: BorderStyle | boolean;
  borderBottomColor?: Color;
  borderBottomColorLightness?: ColorAdjustment;
  borderColor?: Color;
  borderColorLightness?: ColorAdjustment;
  borderLeft?: BorderStyle | boolean;
  borderLeftColor?: Color;
  borderLeftColorLightness?: ColorAdjustment;
  borderRadius?: BorderRadius | boolean;
  borderRight?: BorderStyle | boolean;
  borderRightColor?: Color;
  borderRightColorLightness?: ColorAdjustment;
  borderTop?: BorderStyle | boolean;
  borderTopColor?: Color;
  borderTopColorLightness?: ColorAdjustment;
  bottom?: GridSizeOrLength;
  boxShadow?: BoxShadow | boolean;
  color?: Color;
  colorLightness?: ColorAdjustment;
  columnGap?: GridSize;
  columns?: number | Array<string | number>;
  cursor?: Cursor;
  display?: DisplayMode;
  flexDirection?: FlexDirection;
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: FlexWrap;
  fontSize?: FontSize;
  fontStyle?: 'italic';
  fontWeight?: FontWeight;
  gap?: GridSize;
  height?: number | string;
  isFlexible?: boolean;
  isOnlyForScreenReaders?: boolean;
  justifyContent?: FlexJustification;
  justifySelf?: FlexJustification;
  left?: GridSizeOrLength;
  margin?: GridSizeOrLength;
  marginBottom?: GridSizeOrLength;
  marginLeft?: GridSizeOrLength;
  marginRight?: GridSizeOrLength;
  marginTop?: GridSizeOrLength;
  marginX?: GridSizeOrLength;
  marginY?: GridSizeOrLength;
  maxHeight?: number | string;
  maxLines?: number;
  maxWidth?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  opacity?: number;
  overflow?: Overflow;
  overflowX?: Overflow;
  overflowY?: Overflow;
  padding?: GridSizeOrLength;
  paddingBottom?: GridSizeOrLength;
  paddingLeft?: GridSizeOrLength;
  paddingRight?: GridSizeOrLength;
  paddingTop?: GridSizeOrLength;
  paddingX?: GridSizeOrLength;
  paddingY?: GridSizeOrLength;
  pointerEvents?: 'all' | 'auto' | 'none';
  position?: Position;
  right?: GridSizeOrLength;
  rowGap?: GridSize;
  textAlign?: TextAlignment;
  textDecoration?: TextDecoration;
  top?: GridSizeOrLength;
  transform?: string;
  transitionDuration?: TransitionDuration;
  transitionProperty?: AnimatableCSSProperty | Array<AnimatableCSSProperty>;
  whiteSpace?: WhiteSpace;
  width?: number | string;
  zIndex?: zIndex;
};
