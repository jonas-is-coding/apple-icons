import * as React from "react";
const SvgRectangleratio9To16Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h6.65c2.67 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.47-4.11-4.14-4.11h-6.65c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.492c0-1 .51-1.47 1.44-1.47h5.99c.95 0 1.45.47 1.45 1.47v13.44c0 .99-.5 1.45-1.45 1.45Z" />
  </svg>
);
export default SvgRectangleratio9To16Bold;
