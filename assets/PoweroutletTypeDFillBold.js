import * as React from "react";
const SvgPoweroutlettypedfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h14.94c2.67 0 4.13-1.45 4.13-4.11V4.112c0-2.66-1.46-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m7.46-12.31c-1.34 0-2.41-1.09-2.41-2.43 0-1.33 1.07-2.41 2.41-2.41 1.35 0 2.43 1.08 2.43 2.41 0 1.34-1.08 2.43-2.43 2.43m-3.95 7.08c-1.09 0-1.97-.9-1.97-1.98s.88-1.96 1.97-1.96 1.97.88 1.97 1.96-.88 1.98-1.97 1.98m7.92 0c-1.1 0-1.98-.9-1.98-1.98s.88-1.96 1.98-1.96c1.08 0 1.96.88 1.96 1.96s-.88 1.98-1.96 1.98" />
  </svg>
);
export default SvgPoweroutlettypedfillBold;
