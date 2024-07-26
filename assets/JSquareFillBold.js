import * as React from "react";
const SvgJsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m6.64-5.68c-1.95 0-3.43-.9-3.87-2.3-.08-.22-.11-.44-.11-.69 0-.8.53-1.32 1.34-1.34.72 0 1.14.32 1.36.97.2.56.62.87 1.24.87.74 0 1.16-.5 1.16-1.51v-5.42c0-1.02.53-1.66 1.48-1.66s1.49.63 1.49 1.66v5.5c0 2.51-1.5 3.92-4.09 3.92" />
  </svg>
);
export default SvgJsquarefillBold;
