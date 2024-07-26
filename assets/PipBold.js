import * as React from "react";
const SvgPipBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 20.327h7.1v1.72c0 2.66 1.46 4.11 4.13 4.11h12.28c2.68 0 4.14-1.45 4.14-4.11v-8.14c0-2.66-1.46-4.11-4.14-4.11h-2.08v-5.68c0-2.65-1.47-4.12-4.14-4.12H4.142c-2.68 0-4.14 1.46-4.14 4.12v12.1c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.47-1.44-1.46V4.487c0-1 .51-1.45 1.44-1.45h16.64c.94 0 1.45.45 1.45 1.45v5.31h-7.18c-2.67 0-4.13 1.45-4.13 4.11v3.4Zm11.25 5.83c-.95 0-1.45-.46-1.45-1.46v-7.4c0-1 .5-1.46 1.45-1.46h11.62c.93 0 1.44.46 1.44 1.46v7.4c0 1-.51 1.46-1.44 1.46Z" />
  </svg>
);
export default SvgPipBold;
