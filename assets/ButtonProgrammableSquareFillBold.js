import * as React from "react";
const SvgButtonprogrammablesquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.06-4.51a6.67 6.67 0 0 1-6.67-6.68c0-3.68 2.98-6.67 6.67-6.67s6.67 2.99 6.67 6.67a6.67 6.67 0 0 1-6.67 6.68m0-1.98c2.6 0 4.7-2.1 4.7-4.7 0-2.59-2.1-4.69-4.7-4.69s-4.7 2.1-4.7 4.69c0 2.6 2.1 4.7 4.7 4.7m0-1.36c-1.84 0-3.34-1.5-3.34-3.34s1.5-3.34 3.34-3.34 3.34 1.5 3.34 3.34-1.5 3.34-3.34 3.34" />
  </svg>
);
export default SvgButtonprogrammablesquarefillBold;
