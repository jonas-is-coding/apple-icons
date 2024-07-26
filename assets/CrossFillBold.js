import * as React from "react";
const SvgCrossfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 15.52c0 1.89 1.28 3.15 3.17 3.15h4.72v4.72c0 1.9 1.26 3.16 3.15 3.16h4.49c1.89 0 3.15-1.26 3.15-3.16v-4.72h4.72c1.9 0 3.16-1.26 3.16-3.15v-4.49c0-1.89-1.26-3.16-3.16-3.16h-4.72V3.16c0-1.89-1.26-3.16-3.15-3.16h-4.49c-1.89 0-3.15 1.27-3.15 3.16v4.71h-4.73c-1.9 0-3.16 1.27-3.16 3.16Z" />
  </svg>
);
export default SvgCrossfillBold;
