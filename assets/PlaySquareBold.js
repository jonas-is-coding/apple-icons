import * as React from "react";
const SvgPlaysquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm4.91-3.56 6.23-3.68c.73-.44.72-1.46 0-1.89l-6.23-3.67c-.77-.46-1.68-.07-1.68.83v7.56c0 .9.9 1.3 1.68.85" />
  </svg>
);
export default SvgPlaysquareBold;
