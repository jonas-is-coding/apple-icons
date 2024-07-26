import * as React from "react";
const SvgSquaresplit2X1FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404c-2.68 0-4.14-1.45-4.14-4.1V4.114c0-2.66 1.46-4.11 4.14-4.11h14.13c2.68 0 4.13 1.46 4.13 4.11v14.19c0 2.65-1.45 4.1-4.13 4.1h-5.63V.014h-2.88v22.39h2.88v.01h-2.88v-.01Z" />
  </svg>
);
export default SvgSquaresplit2X1FillBold;
