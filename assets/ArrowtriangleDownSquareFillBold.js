import * as React from "react";
const SvgArrowtriangledownsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m6.12-6.63-3.85-6.55c-.49-.82-.07-1.81.88-1.81h7.97c.95 0 1.37.98.88 1.81l-3.86 6.55c-.47.8-1.56.76-2.02 0" />
  </svg>
);
export default SvgArrowtriangledownsquarefillBold;
