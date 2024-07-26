import * as React from "react";
const SvgCreditcardfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M23.932 0H4.142C1.462 0 .002 1.45.002 4.11v1h28.06v-1c0-2.66-1.46-4.11-4.13-4.11M5.052 16.85c-.69 0-1.16-.47-1.16-1.12v-2.17c0-.66.47-1.13 1.16-1.13h2.87c.69 0 1.15.47 1.15 1.13v2.17c0 .65-.46 1.12-1.15 1.12Zm-.91 3.89h19.79c2.67 0 4.13-1.46 4.13-4.11V7.99H.002v8.64c0 2.66 1.46 4.11 4.14 4.11" />
  </svg>
);
export default SvgCreditcardfillBold;
