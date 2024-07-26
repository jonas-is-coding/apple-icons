import * as React from "react";
const SvgRectangleratio9To16FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h6.65c2.67 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.47-4.11-4.14-4.11h-6.65c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11" />
  </svg>
);
export default SvgRectangleratio9To16FillBold;
