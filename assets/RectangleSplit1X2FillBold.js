import * as React from "react";
const SvgRectanglesplit1X2FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 9.762v-5.65c0-2.66 1.46-4.11 4.14-4.11h19.69c2.69 0 4.14 1.45 4.14 4.11v5.65Zm4.14 12.64c-2.68 0-4.14-1.45-4.14-4.11v-5.65h27.97v5.65c0 2.66-1.45 4.11-4.14 4.11Z" />
  </svg>
);
export default SvgRectanglesplit1X2FillBold;
