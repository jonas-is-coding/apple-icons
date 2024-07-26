import * as React from "react";
const SvgLocationsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm1.19-7.24h4.27c.25 0 .4.16.4.41l.01 4.23c0 1.11 1.31 1.45 1.81.35l4.55-9.86c.48-1.04-.48-2-1.54-1.52l-9.83 4.57c-1.11.52-.76 1.82.33 1.82" />
  </svg>
);
export default SvgLocationsquareBold;
