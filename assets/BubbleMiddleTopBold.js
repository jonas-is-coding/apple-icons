import * as React from "react";
const SvgBubblemiddletopBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.192.004c-.93 0-1.52.52-2.18 1.53l-2.02 3.21h-3.25c-3.59 0-5.74 2.18-5.74 5.74v9.3c0 3.56 2.15 5.74 5.74 5.74h14.7c3.58 0 5.74-2.19 5.74-5.74v-9.3c0-3.55-2.16-5.74-5.74-5.74h-3.06l-2.02-3.19c-.67-1.05-1.23-1.55-2.17-1.55m0 3.03 2.04 3.68c.45.82.85 1.06 1.76 1.06h3.26c1.94 0 2.9.97 2.9 2.9v8.92c0 1.93-.96 2.91-2.9 2.91H5.932c-1.96 0-2.91-.98-2.91-2.91v-8.92c0-1.93.95-2.9 2.91-2.9h3.43c.93 0 1.29-.25 1.75-1.06Z" />
  </svg>
);
export default SvgBubblemiddletopBold;
