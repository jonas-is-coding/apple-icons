import * as React from "react";
const SvgArrowuprightsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm10.37-4.86c.71 0 1.14-.52 1.14-1.28v-5.32c0-1-.57-1.51-1.53-1.51h-5.35c-.77 0-1.28.43-1.28 1.13 0 .71.51 1.15 1.28 1.15h1.71l1.37-.19-1.58 1.4-3.74 3.75c-.25.24-.42.6-.42.95 0 .77.59 1.29 1.31 1.29.39 0 .71-.13 1.01-.41l3.71-3.72 1.39-1.57-.16 1.45v1.6c0 .78.44 1.28 1.14 1.28" />
  </svg>
);
export default SvgArrowuprightsquareBold;
