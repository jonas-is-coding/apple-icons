import * as React from "react";
const SvgRectangleratio3To4Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h8.67c2.68 0 4.13-1.45 4.13-4.11V4.112c0-2.66-1.45-4.11-4.13-4.11h-8.67c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.492c0-1 .51-1.47 1.44-1.47h8.02c.94 0 1.44.47 1.44 1.47v13.44c0 .99-.5 1.45-1.44 1.45Z" />
  </svg>
);
export default SvgRectangleratio3To4Bold;
