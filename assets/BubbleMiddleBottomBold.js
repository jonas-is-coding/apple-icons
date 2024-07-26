import * as React from "react";
const SvgBubblemiddlebottomBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.192 25.52c.94 0 1.5-.51 2.17-1.55l2.02-3.19h3.06c3.58 0 5.74-2.19 5.74-5.74v-9.3c0-3.56-2.16-5.74-5.74-5.74h-14.7C2.152 0 .002 2.18.002 5.74v9.3c0 3.55 2.15 5.74 5.74 5.74h3.25l2.02 3.2c.66 1.02 1.25 1.54 2.18 1.54m0-3.03-2.08-3.69c-.46-.81-.82-1.05-1.75-1.05h-3.43c-1.96 0-2.91-.98-2.91-2.9V5.92c0-1.92.95-2.9 2.91-2.9h14.32c1.94 0 2.9.98 2.9 2.9v8.93c0 1.92-.96 2.9-2.9 2.9h-3.26c-.91 0-1.31.24-1.76 1.05Z" />
  </svg>
);
export default SvgBubblemiddlebottomBold;
