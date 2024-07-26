import * as React from "react";
const SvgLsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm4.69-2.99h4.91c.79 0 1.29-.44 1.29-1.21 0-.75-.5-1.19-1.29-1.19h-3.37v-6.55c0-1.06-.57-1.7-1.54-1.7s-1.52.64-1.52 1.7v7.25c0 1.04.55 1.7 1.52 1.7" />
  </svg>
);
export default SvgLsquareBold;
