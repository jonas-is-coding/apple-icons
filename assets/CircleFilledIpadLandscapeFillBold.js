import * as React from "react";
const SvgCirclefilledipadlandscapefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.152 22.402h20.26c2.68 0 4.14-1.46 4.14-4.11V4.112c0-2.66-1.46-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.47 4.11 4.15 4.11m10.12-5.09c-3.36 0-6.12-2.73-6.12-6.12 0-3.36 2.76-6.11 6.12-6.11 3.37 0 6.12 2.75 6.12 6.11a6.12 6.12 0 0 1-6.12 6.12" />
  </svg>
);
export default SvgCirclefilledipadlandscapefillBold;
