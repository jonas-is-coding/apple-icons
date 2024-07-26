import * as React from "react";
const SvgPoweronBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.782 23.395c1.02 0 1.78-.75 1.78-1.74V1.734c0-1-.76-1.73-1.78-1.73s-1.78.73-1.78 1.73v19.92c0 .99.76 1.74 1.78 1.74" />
  </svg>
);
export default SvgPoweronBold;
