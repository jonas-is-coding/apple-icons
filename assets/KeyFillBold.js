import * as React from "react";
const SvgKeyfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.962-.005c-4.43 0-7.96 3.54-7.96 7.95 0 3.18 1.83 6.02 4.73 7.29v11.03c0 .42.14.83.47 1.13l2.15 2c.36.34 1 .38 1.43-.04l3.68-3.67c.45-.47.44-1.17-.02-1.64l-1.85-1.84 2.71-2.71c.44-.45.44-1.16-.02-1.62l-2.52-2.55c3.31-1.56 5.15-4.24 5.15-7.38 0-4.39-3.54-7.95-7.95-7.95m0 7.04c-1.08 0-1.96-.88-1.96-1.97s.87-1.96 1.96-1.96 1.96.88 1.96 1.96c0 1.09-.87 1.97-1.96 1.97" />
  </svg>
);
export default SvgKeyfillBold;
