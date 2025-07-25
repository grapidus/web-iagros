export const size = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};

export enum sizeNamed {
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
  xxl = 1400
}

export const device = {
  sm: `(min-width: ${size.sm}px)`,
  md: `(min-width: ${size.md}px)`,
  lg: `(min-width: ${size.lg}px)`,
  xl: `(min-width: ${size.xl}px)`,
  xxl: `(min-width: ${size.xxl}px)`
};
