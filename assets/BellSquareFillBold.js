import * as React from "react";
const SvgBellsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m2.01-7.08c-.75 0-1.21-.44-1.21-1.06 0-.74.58-1.31 1.18-1.85.49-.44.58-1.36.7-2.36.15-2.19.91-3.8 2.51-4.38.3-.86 1-1.46 1.95-1.46s1.66.6 1.96 1.46c1.59.58 2.34 2.19 2.51 4.38.13 1 .21 1.92.7 2.36.61.54 1.17 1.11 1.17 1.85 0 .62-.45 1.06-1.2 1.06Zm5.13 2.91c-1.19 0-2.08-.83-2.15-1.84h4.31c-.07 1.01-.96 1.84-2.16 1.84" />
  </svg>
);
export default SvgBellsquarefillBold;
