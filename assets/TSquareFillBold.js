import * as React from "react";
const SvgTsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.12-5.52c-1.04 0-1.63-.69-1.63-1.81v-7.04h-2.11c-.83 0-1.35-.46-1.35-1.24s.52-1.24 1.35-1.24h7.51c.82 0 1.34.46 1.34 1.24s-.52 1.24-1.34 1.24h-2.13v7.04c0 1.12-.6 1.81-1.64 1.81" />
  </svg>
);
export default SvgTsquarefillBold;
