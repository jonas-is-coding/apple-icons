import * as React from "react";
const SvgPersonfillturnrightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 2.762v14.42c0 2.07.68 2.76 1.84 2.76 2.99 0 7.1-3.9 7.1-9.97 0-6.08-4.11-9.97-7.1-9.97-1.16 0-1.84.69-1.84 2.76m10.98 7.21c0 2.64 2.32 4.79 5.26 4.79 2.86 0 5.15-2.16 5.15-4.79 0-2.61-2.31-4.8-5.16-4.79-2.93.01-5.25 2.15-5.25 4.79" />
  </svg>
);
export default SvgPersonfillturnrightBold;
