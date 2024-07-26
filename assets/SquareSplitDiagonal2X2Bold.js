import * as React from "react";
const SvgSquaresplitdiagonal2X2Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.91-19.38h12.3l-6.15 6.15Zm-2.03 2.05 6.14 6.14-6.14 6.14Zm10.22 6.14 6.14-6.14v12.28Zm-8.17 8.17 6.13-6.13 6.13 6.13Z" />
  </svg>
);
export default SvgSquaresplitdiagonal2X2Bold;
