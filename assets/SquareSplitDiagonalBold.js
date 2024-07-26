import * as React from "react";
const SvgSquaresplitdiagonalBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m-1.12-17.92c0-.99.51-1.46 1.44-1.46h12.89l-14.33 14.33Zm16.36 13.45c0 .99-.5 1.45-1.44 1.45H5.072l14.31-14.31Z" />
  </svg>
);
export default SvgSquaresplitdiagonalBold;
