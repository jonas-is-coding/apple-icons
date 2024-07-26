import * as React from "react";
const SvgSquareonsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 20.327h1.95v1.72c0 2.66 1.47 4.11 4.14 4.11h12.05c2.67 0 4.13-1.45 4.13-4.11v-12.1c0-2.66-1.46-4.11-4.13-4.11h-1.96v-1.72c0-2.65-1.47-4.12-4.14-4.12H4.142c-2.68 0-4.14 1.46-4.14 4.12v12.1c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.47-1.44-1.46V4.487c0-1 .51-1.45 1.44-1.45h11.39c.94 0 1.45.45 1.45 1.45v1.35h-7.07c-2.67 0-4.14 1.45-4.14 4.11v7.36Zm6.1 5.83c-.94 0-1.44-.46-1.44-1.46v-11.36c0-1 .5-1.46 1.44-1.46h11.39c.94 0 1.44.46 1.44 1.46v11.36c0 1-.5 1.46-1.44 1.46Z" />
  </svg>
);
export default SvgSquareonsquareBold;
