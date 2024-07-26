import * as React from "react";
const SvgBubblemiddlebottomfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.192 25.51c.94 0 1.52-.5 2.18-1.54l2.02-3.19h3.05c3.58 0 5.74-2.19 5.74-5.74v-9.3c0-3.56-2.16-5.74-5.74-5.74h-14.7C2.152 0 .002 2.18.002 5.74v9.3c0 3.55 2.15 5.74 5.74 5.74h3.22l2.04 3.2c.66 1.02 1.26 1.53 2.19 1.53" />
  </svg>
);
export default SvgBubblemiddlebottomfillBold;
