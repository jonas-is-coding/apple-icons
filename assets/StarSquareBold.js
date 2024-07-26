import * as React from "react";
const SvgStarsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm3.65-2.36 3.09-2.27 3.11 2.27c.71.53 1.5.04 1.2-.88l-1.21-3.65 3.11-2.23c.62-.46.52-1.45-.44-1.44l-3.86.04-1.17-3.67c-.27-.86-1.21-.86-1.48 0l-1.17 3.67-3.84-.04c-.94-.01-1.09.97-.46 1.44l3.13 2.24-1.22 3.64c-.29.88.49 1.41 1.21.88" />
  </svg>
);
export default SvgStarsquareBold;
