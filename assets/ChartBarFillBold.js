import * as React from "react";
const SvgChartbarfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M25.772 22.309h3.06c1.98 0 3.11-1.12 3.11-3.02V3.019c0-1.89-1.13-3.02-3.11-3.02h-3.06c-1.97 0-3.11 1.13-3.11 3.04v16.25c0 1.9 1.14 3.02 3.11 3.02m-11.33 0h3.05c1.98 0 3.11-1.12 3.11-3.02V6.429c0-1.89-1.13-3.02-3.11-3.02h-3.05c-1.97 0-3.11 1.13-3.11 3.04v12.84c0 1.9 1.14 3.02 3.11 3.02m-11.34 0h3.06c1.98 0 3.11-1.12 3.11-3.02v-9.41c0-1.9-1.13-3.02-3.11-3.02h-3.06c-1.98 0-3.1 1.12-3.1 3.03v9.4c0 1.9 1.12 3.02 3.1 3.02" />
  </svg>
);
export default SvgChartbarfillBold;
