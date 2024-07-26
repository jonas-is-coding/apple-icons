import * as React from "react";
const SvgPipfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15.922 8.437h9.65v-4.32c0-2.65-1.47-4.12-4.14-4.12H4.142c-2.68 0-4.14 1.46-4.14 4.12v12.1c0 2.66 1.46 4.11 4.14 4.11h5.75v-5.88c0-3.7 2.31-6.01 6.03-6.01m0 17.72h11.73c2.68 0 4.14-1.45 4.14-4.11v-7.6c0-2.65-1.46-4.11-4.14-4.11h-11.73c-2.67 0-4.13 1.45-4.13 4.11v7.6c0 2.66 1.46 4.11 4.13 4.11" />
  </svg>
);
export default SvgPipfillBold;
