import * as React from "react";
const SvgZsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m3.98-5.73c-.81 0-1.37-.54-1.37-1.3 0-.49.15-.83.56-1.34l4.54-5.85v-.13h-3.92c-.82 0-1.35-.45-1.35-1.21 0-.75.52-1.21 1.35-1.21h6.31c.82 0 1.38.54 1.38 1.32 0 .53-.12.8-.55 1.32l-4.55 5.86v.13h4.12c.83 0 1.34.43 1.34 1.19 0 .75-.52 1.22-1.34 1.22Z" />
  </svg>
);
export default SvgZsquarefillBold;
