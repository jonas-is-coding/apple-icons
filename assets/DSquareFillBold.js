import * as React from "react";
const SvgDsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m4.13-5.73c-1.1 0-1.65-.62-1.65-1.74v-7.55c0-1.11.56-1.75 1.65-1.75h3.06c3.45 0 5.36 1.98 5.36 5.51 0 3.55-1.93 5.53-5.36 5.53Zm1.26-2.27h1.34c1.83 0 2.73-1.02 2.73-3.25 0-2.17-.9-3.24-2.73-3.24h-1.34Z" />
  </svg>
);
export default SvgDsquarefillBold;
