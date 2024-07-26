import * as React from "react";
const SvgSquaresplitbottomrightquarterBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v4.98h-6.12c-2.45 0-3.8 1.34-3.8 3.73v6.19Zm13.48 0h-5.46v-5.83c0-.69.4-1.06 1.11-1.06h5.79v5.44c0 .99-.5 1.45-1.44 1.45" />
  </svg>
);
export default SvgSquaresplitbottomrightquarterBold;
