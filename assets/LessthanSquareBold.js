import * as React from "react";
const SvgLessthansquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm9.68-3.36c.76 0 1.33-.56 1.33-1.33 0-.64-.3-1.02-1.08-1.33l-4.68-2.11v-.11l4.68-2.14c.77-.32 1.08-.72 1.08-1.35 0-.78-.55-1.31-1.32-1.31-.3 0-.53.04-.79.17l-6.68 3.41c-.61.31-.9.72-.9 1.31 0 .6.3.97.9 1.27l6.68 3.34c.24.12.49.18.78.18" />
  </svg>
);
export default SvgLessthansquareBold;
