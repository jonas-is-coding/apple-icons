import * as React from "react";
const SvgPlussquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm1.36-8.18c0 .75.54 1.29 1.29 1.29h2.8v2.81c0 .74.54 1.28 1.29 1.28s1.31-.54 1.31-1.28v-2.81h2.8c.74 0 1.28-.54 1.28-1.29 0-.76-.54-1.31-1.28-1.31h-2.8v-2.8c0-.75-.56-1.28-1.31-1.28s-1.29.53-1.29 1.28v2.8h-2.8c-.75 0-1.29.55-1.29 1.31" />
  </svg>
);
export default SvgPlussquareBold;
