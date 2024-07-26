import * as React from "react";
const SvgSignpostrightcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-4.01-10.91c-.89 0-1.4-.52-1.4-1.41v-3.13c0-.89.51-1.39 1.4-1.39h3.19v-1.18c0-.44.35-.8.81-.8.45 0 .8.36.8.8v1.18h2.61c.54 0 .83.15 1.18.49l1.49 1.43c.73.69.71 1.39 0 2.08l-1.49 1.42c-.35.34-.64.51-1.18.51h-2.61v3.36h1.45c.45 0 .81.36.81.81 0 .44-.36.81-.81.81h-4.51c-.43 0-.81-.37-.81-.81 0-.45.38-.81.81-.81h1.45v-3.36Z" />
  </svg>
);
export default SvgSignpostrightcirclefillBold;
