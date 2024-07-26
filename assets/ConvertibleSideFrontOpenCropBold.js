import * as React from "react";
const SvgConvertiblesidefrontopencropBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m3.002 18.51 2.49.27c.8 1.4 2.31 2.34 4.08 2.34 1.96 0 3.61-1.15 4.32-2.82h10.74v-2.76h-10.46c-.41-2.18-2.28-3.78-4.6-3.78-2.46 0-4.42 1.79-4.66 4.18l-1.26-.15c-.59-.07-.9-.38-.9-.93v-1.58c0-1.8 1.2-2.87 3.85-3.36l7.6-1.43.01-.01 10.42-.6V5.13l-5.04.29 4.21-2.87c1.56-1.07.01-3.37-1.61-2.25l-7.98 5.42-1.49.27-4.33-4.33C7.592.87 6.822.54 5.402.54h-3.47c-.78 0-1.3.52-1.3 1.26s.52 1.26 1.3 1.26h3.51c.53 0 .85.14 1.17.47l3.03 3.04-3.44.64c-4.09.76-6.2 2.73-6.2 6.07v1.88c0 2.06.95 3.13 3 3.35m6.57 0c-1.16 0-2.07-.92-2.07-2.06 0-1.16.91-2.08 2.07-2.08 1.15 0 2.07.92 2.07 2.08 0 1.14-.92 2.06-2.07 2.06" />
  </svg>
);
export default SvgConvertiblesidefrontopencropBold;
