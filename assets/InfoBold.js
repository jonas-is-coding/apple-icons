import * as React from "react";
const SvgInfoBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.152 2.223c0 1.23.97 2.22 2.2 2.22 1.26 0 2.22-.99 2.22-2.22 0-1.24-.96-2.22-2.22-2.22-1.23 0-2.2.98-2.2 2.22m-3.15 15.28c.01 1.07.74 1.73 1.89 1.73h7.21c1.15 0 1.88-.66 1.89-1.73.02-1.09-.71-1.76-1.89-1.76h-1.5v-7.4c0-1.09-.7-1.75-1.78-1.75h-3.62c-1.17 0-1.9.67-1.89 1.77.02 1.06.74 1.73 1.89 1.73h1.77v5.65h-2.08c-1.18 0-1.9.67-1.89 1.76" />
  </svg>
);
export default SvgInfoBold;
