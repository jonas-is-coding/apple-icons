import * as React from "react";
const SvgRectangleratio3To4FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h8.67c2.68 0 4.13-1.45 4.13-4.11V4.112c0-2.66-1.45-4.11-4.13-4.11h-8.67c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11" />
  </svg>
);
export default SvgRectangleratio3To4FillBold;
