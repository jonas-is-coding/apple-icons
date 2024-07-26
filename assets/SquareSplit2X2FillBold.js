import * as React from "react";
const SvgSquaresplit2X2FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.272.004c2.68 0 4.13 1.46 4.13 4.11v5.66h-9.76V.014h-2.88v9.76H.002v-5.66c0-2.66 1.46-4.11 4.14-4.11Zm0 22.4h-5.63v-9.75h9.76v5.65c0 2.65-1.45 4.1-4.13 4.1m-18.27-9.75h9.76v9.75h2.88v.01h-2.88v-.01h-5.62c-2.68 0-4.14-1.45-4.14-4.1Z" />
  </svg>
);
export default SvgSquaresplit2X2FillBold;
