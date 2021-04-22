const BreakpointType = {
  xxl: 'xxl',
  xl: 'xl',
  l: 'l',
  m: 'm',
  s: 's',
  xs: 'xs',
  xxs: 'xxs',
};

const BreakpointValue = {
  [BreakpointType.xxl]: 1400,
  [BreakpointType.xl]: 1200,
  [BreakpointType.l]: 1024,
  [BreakpointType.m]: 768,
  [BreakpointType.s]: 480,
  [BreakpointType.xs]: 320,
  [BreakpointType.xxs]: 0,
};

export {
  BreakpointType,
  BreakpointValue,
};
