import * as React from "react";
const SvgHeartsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm4.06-13.13c-1.84 0-3.27 1.43-3.27 3.5 0 3.38 3.8 6.05 5.31 6.99.2.12.48.27.66.27.2 0 .46-.15.66-.27 1.5-.95 5.31-3.61 5.31-6.99 0-2.07-1.43-3.5-3.28-3.5-1.26 0-2.18.74-2.7 1.63-.5-.89-1.43-1.63-2.69-1.63" />
  </svg>
);
export default SvgHeartsquareBold;
