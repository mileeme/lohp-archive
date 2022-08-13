const breakpoints = [320, 600, 1024, 1440];
const mq = breakpoints.map(
  (breakpoint) => `@media (min-width: ${breakpoint}px)`
);

export { mq };
