import * as React from "react";
const SvgInsetfilledcapsuleportraitBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.152 28.523c6.73 0 11.17-4.39 11.17-11.17v-6.2c0-6.77-4.44-11.15-11.17-11.15-6.72 0-11.15 4.38-11.15 11.15v6.2c0 6.78 4.43 11.17 11.15 11.17m0-3.03c-4.94 0-8.12-3.04-8.12-7.94v-6.58c0-4.9 3.18-7.95 8.12-7.95 4.96 0 8.13 3.05 8.13 7.95v6.58c0 4.9-3.17 7.94-8.13 7.94m0-1.76c4.25 0 6.37-2.04 6.37-6.18v-6.58c0-4.15-2.12-6.18-6.37-6.18-4.23 0-6.35 2.03-6.35 6.18v6.58c0 4.14 2.12 6.18 6.35 6.18" />
  </svg>
);
export default SvgInsetfilledcapsuleportraitBold;
