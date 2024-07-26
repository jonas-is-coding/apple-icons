import * as React from "react";
const SvgHeartsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m4.28-16.43c1.35 0 2.31.78 2.85 1.73.53-.95 1.51-1.73 2.84-1.73 1.94 0 3.44 1.5 3.44 3.68 0 3.58-4.03 6.39-5.58 7.36-.22.12-.49.28-.69.28s-.49-.16-.71-.28c-1.56-.97-5.58-3.78-5.58-7.36 0-2.18 1.5-3.68 3.43-3.68" />
  </svg>
);
export default SvgHeartsquarefillBold;
