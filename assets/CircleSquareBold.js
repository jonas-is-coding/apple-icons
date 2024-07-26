import * as React from "react";
const SvgCirclesquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm6.75-2.17c3.32 0 6.01-2.69 6.01-6.01 0-3.33-2.69-6.01-6.01-6.01s-6.01 2.68-6.01 6.01c0 3.32 2.69 6.01 6.01 6.01m0-2.47a3.54 3.54 0 1 1 0-7.08 3.54 3.54 0 0 1 0 7.08" />
  </svg>
);
export default SvgCirclesquareBold;
