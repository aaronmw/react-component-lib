import {
  BORDER_RADII,
  BORDER_STYLES,
  COLOR_PALETTE,
  FONT_SIZES,
  GRID_SIZES,
  LINE_HEIGHTS,
  RESPONSIVE_BREAKPOINTS,
  SPOT_COLORS,
  TEXT_DECORATIONS,
  TRANSITION_DURATIONS,
  UNADJUSTABLE_COLORS,
  Z_INDEXES,
} from '../../_tokens';
import { BoxStyleProps } from '../Box.types';
import buildBoxStyles, { CHILDREN_SELECTOR } from '../buildBoxStyles';

const testGroups = [
  {
    groupName: 'Additional CSS',
    testSpecs: [
      {
        it: 'Appends additionalCSS',
        props: {
          additionalCSS: `::placeholder { color: pink; }`,
        },
        expectedLines: [`& {`, `::placeholder { color: pink; }`, `}`],
      },
    ],
  },
  {
    groupName: 'Borders',
    testSpecs: [
      {
        it: 'Applies default border',
        props: {
          border: true,
        },
        expectedLines: [`border: ${BORDER_STYLES.normal} ${COLOR_PALETTE[SPOT_COLORS.border]};`],
      },
      {
        it: 'Applies default border to single edge',
        props: {
          borderLeft: true,
        },
        expectedLines: [`border-left: ${BORDER_STYLES.normal} ${COLOR_PALETTE[SPOT_COLORS.border]};`],
      },
      {
        it: 'Applies border with one edge colored separately',
        props: {
          border: true,
          borderRightColor: 'red',
        },
        expectedLines: [
          `border: ${BORDER_STYLES.normal} ${COLOR_PALETTE[SPOT_COLORS.border]};`,
          `border-right-color: ${COLOR_PALETTE.red};`,
        ],
      },
      {
        it: 'Applies borderColor to right border',
        props: {
          borderRight: true,
          borderColor: 'red',
        },
        expectedLines: [`border-right: ${BORDER_STYLES.normal} ${COLOR_PALETTE.red};`],
      },
      {
        it: 'Applies borderColorLightness to right border',
        props: {
          borderRight: true,
          borderColorLightness: 100,
        },
        expectedLines: [`border-right: ${BORDER_STYLES.normal} ${COLOR_PALETTE['gray--100']};`],
      },
      {
        it: 'Applies borderRightColor to right border',
        props: {
          borderRight: true,
          borderRightColor: 'red',
        },
        expectedLines: [`border-right: ${BORDER_STYLES.normal} ${COLOR_PALETTE.red};`],
      },
      {
        it: 'Applies borderRadius',
        props: {
          border: true,
          borderRadius: 'normal',
        },
        expectedLines: [
          `border: ${BORDER_STYLES.normal} ${COLOR_PALETTE[SPOT_COLORS.border]};`,
          `border-radius: ${BORDER_RADII.normal};`,
        ],
      },
      {
        it: 'Applies borderTopLeftRadius',
        props: {
          border: true,
          borderTopLeftRadius: 'normal',
        },
        expectedLines: [
          `border: ${BORDER_STYLES.normal} ${COLOR_PALETTE[SPOT_COLORS.border]};`,
          `border-top-left-radius: ${BORDER_RADII.normal};`,
        ],
      },
      {
        it: 'Applies both borderRadius and borderTopLeftRadius',
        props: {
          border: true,
          borderRadius: 'normal',
          borderTopLeftRadius: 'large',
        },
        expectedLines: [
          `border: ${BORDER_STYLES.normal} ${COLOR_PALETTE[SPOT_COLORS.border]};`,
          `border-radius: ${BORDER_RADII.normal};`,
          `border-top-left-radius: ${BORDER_RADII.large};`,
        ],
      },
    ],
  },
  {
    groupName: 'Colors',
    testSpecs: [
      {
        it: 'Sets and adjusts color',
        props: {
          color: 'danger',
          colorLightness: '+100',
        },
        expectedLines: [`color: ${COLOR_PALETTE['red--600']};`],
      },
      {
        it: 'Sets and adjusts backgroundColor',
        props: {
          backgroundColor: 'danger',
          backgroundColorLightness: '+100',
        },
        expectedLines: [`background-color: ${COLOR_PALETTE['red--600']};`],
      },
      {
        it: 'Sets and adjusts borderColor',
        props: {
          border: true,
          borderColor: 'danger',
          borderColorLightness: '+100',
        },
        expectedLines: [`border: ${BORDER_STYLES.normal} ${COLOR_PALETTE['red--600']};`],
      },
      {
        it: 'Translates spot colors to their actual values',
        props: {
          color: 'danger',
        },
        expectedLines: [`color: ${COLOR_PALETTE[SPOT_COLORS.danger]};`],
      },
      {
        it: 'Does not adjust past supported lightness values',
        props: {
          color: 'danger',
          colorLightness: '+700',
        },
        expectedLines: [`color: ${COLOR_PALETTE['red--700']};`],
      },
      {
        it: 'Correctly adjusts color with negative relative amount',
        props: {
          color: 'danger',
          colorLightness: '-100',
        },
        expectedLines: [`color: ${COLOR_PALETTE['red--400']};`],
      },
      {
        it: 'Correctly sets lightness to absolute value',
        props: {
          color: 'danger',
          colorLightness: 100,
        },
        expectedLines: [`color: ${COLOR_PALETTE['red--100']};`],
      },
      {
        it: 'Adjusts inferred borderColor',
        props: {
          border: true,
          borderColorLightness: 100,
        },
        expectedLines: [`border: ${BORDER_STYLES.normal} ${COLOR_PALETTE['gray--100']};`],
      },
      {
        it: 'Adjusts explicit borderColor',
        props: {
          border: true,
          borderColor: 'red',
          borderColorLightness: 100,
        },
        expectedLines: [`border: ${BORDER_STYLES.normal} ${COLOR_PALETTE['red--100']};`],
      },
    ],
  },
  {
    groupName: 'Columns',
    testSpecs: [
      {
        it: 'Renders two column grid layout from integer',
        props: {
          columns: 2,
        },
        expectedLines: [`display: grid;`, `grid-template-columns: repeat(2, 1fr);`],
      },
      {
        it: 'Renders grid column layout from array',
        props: {
          columns: [2, '150px'],
        },
        expectedLines: [`display: grid;`, `grid-template-columns: repeat(2, 1fr) 150px;`],
      },
      {
        it: 'Applies gap using grid properties when columns are specified',
        props: {
          columns: 2,
          gap: 'normal',
        },
        expectedLines: [`display: grid;`, `gap: ${GRID_SIZES.normal};`, `grid-template-columns: repeat(2, 1fr);`],
      },
    ],
  },
  {
    groupName: 'Dimensions & Positioning',
    testSpecs: [
      {
        it: 'Renders integer as pixels',
        props: {
          height: 150,
        },
        expectedLines: [`height: 150px;`],
      },
      {
        it: 'Accepts named grid spaces as values for positioning props',
        props: {
          top: 'normal',
        },
        expectedLines: [`top: ${GRID_SIZES.normal};`],
      },
      {
        it: 'Accepts numeric values for positioning props',
        props: {
          top: 100,
        },
        expectedLines: [`top: 100px;`],
      },
      {
        it: 'Accepts string values for positioning props',
        props: {
          top: '50%',
        },
        expectedLines: [`top: 50%;`],
      },
      {
        it: 'Accepts arbitrary numeric zIndex values',
        props: {
          zIndex: 123,
        },
        expectedLines: [`z-index: 123;`],
      },
      {
        it: 'Accepts named zIndex values',
        props: {
          zIndex: '1--stickyElements',
        },
        expectedLines: [`z-index: ${Z_INDEXES['1--stickyElements']};`],
      },
    ],
  },
  {
    groupName: 'FlexBox',
    testSpecs: [
      {
        it: 'Sets display to "flex" when only alignItems given',
        props: {
          alignItems: 'center',
        },
        expectedLines: [`align-items: center;`, `display: flex;`],
      },
      {
        it: 'Sets display to "flex" when only flexDirection given',
        props: {
          flexDirection: 'row',
        },
        expectedLines: [`display: flex;`, `flex-direction: row;`],
      },
      {
        it: 'Applies gap to top when flexDirection set to "column"',
        props: {
          flexDirection: 'column',
          gap: 'normal',
        },
        expectedLines: [
          `display: flex;`,
          `flex-direction: column;`,
          `${CHILDREN_SELECTOR} {`,
          `margin-top: ${GRID_SIZES.normal};`,
          `}`,
        ],
      },
      {
        it: 'Infers correct "display" value from multiple provided flex props',
        props: {
          alignItems: 'center',
          flexDirection: 'row',
        },
        expectedLines: [`align-items: center;`, `display: flex;`, `flex-direction: row;`],
      },
      {
        it: 'Renders flexbox layout when only "gap" prop is specified',
        props: {
          gap: 'normal',
        },
        expectedLines: [`display: flex;`, `${CHILDREN_SELECTOR} {`, `margin-left: ${GRID_SIZES.normal};`, `}`],
      },
      {
        it: 'Sets display to "flex" when only columnGap specified',
        props: {
          columnGap: 'normal',
        },
        expectedLines: [`display: flex;`, `${CHILDREN_SELECTOR} {`, `margin-left: ${GRID_SIZES.normal};`, `}`],
      },
      {
        it: 'Sets display to "flex" and flexDirection to "column" when only rowGap specified',
        props: {
          rowGap: 'normal',
        },
        expectedLines: [
          `display: flex;`,
          `flex-direction: column;`,
          `${CHILDREN_SELECTOR} {`,
          `margin-top: ${GRID_SIZES.normal};`,
          `}`,
        ],
      },
    ],
  },
  {
    groupName: 'Focus Ring',
    testSpecs: [
      {
        it: 'Applies focus-ring styles to links',
        props: {
          as: 'a',
          href: '#somewhere',
        },
        expectedLines: [
          `cursor: pointer;`,
          `&:focus {`,
          `box-shadow: 0 0 0 2px white, 0 0 0 6px ${COLOR_PALETTE[SPOT_COLORS['focusIndicator']]};`,
          `border-radius: ${BORDER_RADII.normal};`,
          `position: relative;`,
          `z-index: ${Z_INDEXES['1--stickyElements']};`,
          `}`,
        ],
      },
      {
        it: 'Applies focus-ring styles to boxes with onClick',
        props: {
          onClick: () => true,
        },
        expectedLines: [
          `cursor: pointer;`,
          `&:focus {`,
          `box-shadow: 0 0 0 2px white, 0 0 0 6px ${COLOR_PALETTE[SPOT_COLORS['focusIndicator']]};`,
          `border-radius: ${BORDER_RADII.normal};`,
          `position: relative;`,
          `z-index: ${Z_INDEXES['1--stickyElements']};`,
          `}`,
        ],
      },
      {
        it: 'Applies focus-ring styles to :focus-within if highlightFocusWithin is true',
        props: {
          highlightFocusWithin: true,
        },
        expectedLines: [
          `cursor: pointer;`,
          `&:focus-within {`,
          `box-shadow: 0 0 0 2px white, 0 0 0 6px ${COLOR_PALETTE[SPOT_COLORS['focusIndicator']]};`,
          `border-radius: ${BORDER_RADII.normal};`,
          `position: relative;`,
          `z-index: ${Z_INDEXES['1--stickyElements']};`,
          `}`,
        ],
      },
    ],
  },
  {
    groupName: 'Hover Props',
    testSpecs: [
      {
        it: 'Correctly renders hoverProps in :hover and :focus pseudo selectors',
        props: {
          backgroundColor: 'transparent',
          hoverProps: {
            backgroundColor: 'red',
            padding: 'normal',
          },
        },
        expectedLines: [
          `background-color: ${UNADJUSTABLE_COLORS.transparent};`,
          `&:hover, &:focus {`,
          `background-color: ${COLOR_PALETTE['red']};`,
          `padding: ${GRID_SIZES['normal']};`,
          `}`,
        ],
      },
      {
        it: 'Can negate props on hover',
        props: {
          border: true,
          hoverProps: {
            border: false,
          },
        },
        expectedLines: [
          `border: ${BORDER_STYLES.normal} ${COLOR_PALETTE[SPOT_COLORS.border]};`,
          `&:hover, &:focus {`,
          `border: none;`,
          `}`,
        ],
      },
    ],
  },
  {
    groupName: 'Margins & Padding',
    testSpecs: [
      {
        it: 'Applies normal padding all around',
        props: {
          padding: 'normal',
        },
        expectedLines: [`padding: ${GRID_SIZES.normal};`],
      },
      {
        it: 'Applies normal margin all around',
        props: {
          margin: 'normal',
        },
        expectedLines: [`margin: ${GRID_SIZES.normal};`],
      },
      {
        it: 'Applies numeric margins and padding',
        props: {
          margin: 50,
          padding: 50,
        },
        expectedLines: [`margin: 50px;`, `padding: 50px;`],
      },
      {
        it: 'Applies arbitrary string margins and padding',
        props: {
          margin: '10%',
          padding: '2rem',
        },
        expectedLines: [`margin: 10%;`, `padding: 2rem;`],
      },
      {
        it: 'Applies horizontal padding',
        props: {
          paddingX: 'normal',
        },
        expectedLines: [`padding-left: ${GRID_SIZES.normal};`, `padding-right: ${GRID_SIZES.normal};`],
      },
      {
        it: 'Applies both horizontal and vertical padding values',
        props: {
          paddingX: 'normal',
          paddingY: 'tight',
        },
        expectedLines: [
          `padding-bottom: ${GRID_SIZES.tight};`,
          `padding-left: ${GRID_SIZES.normal};`,
          `padding-right: ${GRID_SIZES.normal};`,
          `padding-top: ${GRID_SIZES.tight};`,
        ],
      },
      {
        it: 'Sets all edge padding, then horizontal',
        props: {
          padding: 'tight',
          paddingX: 'normal',
        },
        expectedLines: [
          `padding: ${GRID_SIZES.tight};`,
          `padding-left: ${GRID_SIZES.normal};`,
          `padding-right: ${GRID_SIZES.normal};`,
        ],
      },
      {
        it: 'Sets padding, then overrides left and right padding',
        props: {
          padding: 'normal',
          paddingX: 'tight',
        },
        expectedLines: [
          `padding: ${GRID_SIZES.normal};`,
          `padding-left: ${GRID_SIZES.tight};`,
          `padding-right: ${GRID_SIZES.tight};`,
        ],
      },
      {
        it: 'Applies props in correct order, regardless of prop order',
        props: {
          paddingRight: 'xtight',
          paddingX: 'tight',
          padding: 'normal',
        },
        expectedLines: [
          `padding: ${GRID_SIZES.normal};`,
          `padding-left: ${GRID_SIZES.tight};`,
          `padding-right: ${GRID_SIZES.xtight};`,
        ],
      },
      {
        it: 'Sets horizontal padding, then overrides right padding',
        props: {
          paddingRight: 'tight',
          paddingX: 'normal',
        },
        expectedLines: [`padding-left: ${GRID_SIZES.normal};`, `padding-right: ${GRID_SIZES.tight};`],
      },
    ],
  },
  {
    groupName: 'Opacity',
    testSpecs: [
      {
        it: 'Sets opacity to decimal values',
        props: {
          opacity: 0.01,
        },
        expectedLines: [`opacity: 0.01;`],
      },
    ],
  },
  {
    groupName: 'Responsive Props',
    testSpecs: [
      {
        it: 'Correctly generates styles for media-selected breakpoints',
        props: {
          width: 600,
          responsiveProps: {
            phonesOnly: {
              width: 100,
            },
            tabletsPortraitAndUp: {
              width: 200,
            },
            tabletsLandscapeAndUp: {
              width: 300,
            },
            desktopsAndUp: {
              width: 400,
            },
            largeDesktopsAndUp: {
              width: 500,
            },
          },
        },
        expectedLines: [
          `width: 600px;`,
          `${RESPONSIVE_BREAKPOINTS['phonesOnly']} {`,
          `width: 100px;`,
          `}`,
          `${RESPONSIVE_BREAKPOINTS['desktopsAndUp']} {`,
          `width: 400px;`,
          `}`,
          `${RESPONSIVE_BREAKPOINTS['largeDesktopsAndUp']} {`,
          `width: 500px;`,
          `}`,
          `${RESPONSIVE_BREAKPOINTS['tabletsPortraitAndUp']} {`,
          `width: 200px;`,
          `}`,
          `${RESPONSIVE_BREAKPOINTS['tabletsLandscapeAndUp']} {`,
          `width: 300px;`,
          `}`,
        ],
      },
    ],
  },
  {
    groupName: 'Transitions',
    testSpecs: [
      {
        it: 'Accepts numeric transitionDuration',
        props: {
          transitionDuration: 5000,
        },
        expectedLines: [`transition-duration: 5000ms;`],
      },
      {
        it: 'Accepts array for transitionProperty, and infers default duration',
        props: {
          transitionProperty: ['height', 'width'],
        },
        expectedLines: [`transition-duration: ${TRANSITION_DURATIONS.normal};`, `transition-property: height, width;`],
      },
      {
        it: 'Applies transitionProperty and transitionDuration',
        props: {
          transitionDuration: 'long',
          transitionProperty: ['height', 'width'],
        },
        expectedLines: [`transition-duration: ${TRANSITION_DURATIONS.long};`, `transition-property: height, width;`],
      },
    ],
  },
  {
    groupName: 'Typography',
    testSpecs: [
      {
        it: 'Applies appropriate line-height for given fontSize',
        props: {
          fontSize: 'small',
        },
        expectedLines: [`font-size: ${FONT_SIZES.small};`, `line-height: ${LINE_HEIGHTS.small};`],
      },
      {
        it: 'Applies named text decoration values',
        props: {
          textDecoration: 'dotted-underline',
        },
        expectedLines: [`text-decoration: ${TEXT_DECORATIONS['dotted-underline']};`],
      },
      {
        it: 'Correctly translates maxLines prop to CSS',
        props: {
          maxLines: 2,
        },
        expectedLines: [
          `-webkit-box-orient: vertical;`,
          `-webkit-line-clamp: 2;`,
          `display: -webkit-box;`,
          `overflow: hidden;`,
        ],
      },
    ],
  },
];

testGroups.forEach((testGroup) => {
  describe(testGroup.groupName || 'Ungrouped', () => {
    testGroup.testSpecs.forEach((testSpec) => {
      it(testSpec.it, () => {
        const result = buildBoxStyles(testSpec.props as BoxStyleProps);

        expect(result).toBe(testSpec.expectedLines.join('\n'));
      });
    });
  });
});
