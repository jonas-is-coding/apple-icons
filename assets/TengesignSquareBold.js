import * as React from "react";
const SvgTengesignsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm2.6-12.93c0 .2.16.34.36.34h7.57c.2 0 .34-.15.34-.34 0-.18-.14-.34-.34-.34h-7.57c-.2 0-.36.16-.36.34m4.15 10.1c.62 0 1.03-.42 1.03-1.05v-6.12h2.41c.41 0 .68-.28.68-.68s-.27-.67-.68-.67h-6.87c-.42 0-.69.27-.69.67s.27.68.69.68h2.4v6.12c0 .63.42 1.05 1.03 1.05" />
  </svg>
);
export default SvgTengesignsquareBold;
