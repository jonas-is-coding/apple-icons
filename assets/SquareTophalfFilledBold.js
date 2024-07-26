import * as React from "react";
const SvgSquaretophalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 18.272c0 2.68 1.45 4.13 4.11 4.13h14.18c2.66 0 4.11-1.45 4.11-4.13V4.132c0-2.67-1.45-4.13-4.11-4.13H4.112c-2.66 0-4.11 1.46-4.11 4.13Zm3.02-.33v-6.74h16.36v6.74c0 .94-.46 1.44-1.45 1.44H4.472c-.99 0-1.45-.5-1.45-1.44" />
  </svg>
);
export default SvgSquaretophalffilledBold;
