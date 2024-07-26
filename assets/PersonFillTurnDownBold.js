import * as React from "react";
const SvgPersonfillturndownBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.762.004c-2.07 0-2.76.68-2.76 1.84 0 2.98 3.89 7.1 9.97 7.1 6.07 0 9.97-4.12 9.97-7.1 0-1.16-.69-1.84-2.76-1.84Zm7.21 10.98c-2.64 0-4.79 2.32-4.79 5.25-.01 2.83 2.18 5.15 4.79 5.15s4.79-2.28 4.79-5.14c0-2.94-2.15-5.26-4.79-5.26" />
  </svg>
);
export default SvgPersonfillturndownBold;
