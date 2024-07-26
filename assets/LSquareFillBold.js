import * as React from "react";
const SvgLsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m4.96-5.73c-1.04 0-1.61-.69-1.61-1.81v-7.6c0-1.12.57-1.81 1.61-1.81 1.05 0 1.64.69 1.64 1.81v6.86h3.53c.83 0 1.37.47 1.37 1.26 0 .82-.54 1.29-1.37 1.29Z" />
  </svg>
);
export default SvgLsquarefillBold;
