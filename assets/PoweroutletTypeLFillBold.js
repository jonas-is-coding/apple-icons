import * as React from "react";
const SvgPoweroutlettypelfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.102 26.774h7.03c2.65 0 4.11-1.45 4.11-4.07V4.094c0-2.63-1.46-4.09-4.11-4.09h-7.03c-2.63 0-4.1 1.46-4.1 4.09v18.61c0 2.62 1.47 4.07 4.1 4.07m3.53-17.96a1.965 1.965 0 1 1 0-3.93c1.08 0 1.97.88 1.97 1.96 0 1.09-.89 1.97-1.97 1.97m0 6.55a1.97 1.97 0 0 1-1.97-1.98c0-1.08.88-1.96 1.97-1.96 1.08 0 1.97.88 1.97 1.96 0 1.1-.89 1.98-1.97 1.98m0 6.54c-1.09 0-1.97-.88-1.97-1.97s.88-1.97 1.97-1.97c1.08 0 1.97.88 1.97 1.97s-.89 1.97-1.97 1.97" />
  </svg>
);
export default SvgPoweroutlettypelfillBold;
