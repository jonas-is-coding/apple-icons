import * as React from "react";
const SvgSquarerighthalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 18.292c0 2.66 1.46 4.11 4.14 4.11h14.13c2.67 0 4.13-1.45 4.13-4.11V4.112c0-2.66-1.46-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11Zm3.02-.36V4.492c0-1 .51-1.47 1.44-1.47h6.74v16.36h-6.74c-.93 0-1.44-.46-1.44-1.45" />
  </svg>
);
export default SvgSquarerighthalffilledBold;
