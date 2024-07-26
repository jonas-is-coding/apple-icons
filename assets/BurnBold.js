import * as React from "react";
const SvgBurnBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 12.376c0 6.8 5.59 12.39 12.37 12.39 6.8 0 12.38-5.59 12.38-12.39 0-6.79-5.59-12.38-12.38-12.38S.002 5.586.002 12.376m3.09.01h9.27l-4.64-8.06a9.23 9.23 0 0 1 4.65-1.24c1.69 0 3.28.45 4.64 1.24l-4.65 8.06h9.31a9.23 9.23 0 0 1-4.64 8.05l-4.67-8.05-4.64 8.05a9.25 9.25 0 0 1-4.63-8.05" />
  </svg>
);
export default SvgBurnBold;
