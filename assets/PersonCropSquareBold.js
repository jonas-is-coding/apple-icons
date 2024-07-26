import * as React from "react";
const SvgPersoncropsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m-1.12-4.47V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .83-.35 1.28-1.01 1.41-1.11-2.42-3.89-4.05-7.16-4.05s-6.04 1.63-7.17 4.05c-.67-.11-1.02-.58-1.02-1.41m8.19-4.41c2.25.01 3.98-1.9 3.98-4.35 0-2.3-1.75-4.26-3.98-4.26-2.22 0-3.98 1.96-3.97 4.26 0 2.45 1.72 4.34 3.97 4.35" />
  </svg>
);
export default SvgPersoncropsquareBold;
