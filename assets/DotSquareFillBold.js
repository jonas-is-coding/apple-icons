import * as React from "react";
const SvgDotsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.14-7.22a3.986 3.986 0 0 1 0-7.97c2.19 0 3.98 1.79 3.98 3.99a3.99 3.99 0 0 1-3.98 3.98" />
  </svg>
);
export default SvgDotsquarefillBold;
