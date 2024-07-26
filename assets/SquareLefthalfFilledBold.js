import * as React from "react";
const SvgSquarelefthalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 18.292c0 2.66 1.46 4.11 4.14 4.11h14.13c2.68 0 4.13-1.45 4.13-4.11V4.112c0-2.66-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11Zm11.2 1.09V3.022h6.74c.94 0 1.44.47 1.44 1.47v13.44c0 .99-.5 1.45-1.44 1.45Z" />
  </svg>
);
export default SvgSquarelefthalffilledBold;
