import * as React from "react";
const SvgPoweroutlettypemfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h14.94c2.67 0 4.13-1.45 4.13-4.11V4.112c0-2.66-1.46-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m7.46-13.02a1.959 1.959 0 1 1 0-3.92 1.959 1.959 0 1 1 0 3.92m-3.95 7.54c-1.09 0-1.97-.88-1.97-1.97s.88-1.97 1.97-1.97 1.97.88 1.97 1.97-.88 1.97-1.97 1.97m7.92 0a1.97 1.97 0 1 1 0-3.94c1.08 0 1.96.88 1.96 1.97s-.88 1.97-1.96 1.97" />
  </svg>
);
export default SvgPoweroutlettypemfillBold;
