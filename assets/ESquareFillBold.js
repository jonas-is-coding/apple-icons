import * as React from "react";
const SvgEsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m4.53-5.73c-1.1 0-1.65-.62-1.65-1.74v-7.55c0-1.11.56-1.75 1.65-1.75h5.23c.78 0 1.27.42 1.27 1.16 0 .73-.49 1.16-1.27 1.16h-3.96v2.12h3.82c.66 0 1.1.37 1.1 1.02s-.44 1.01-1.1 1.01h-3.82v2.25h3.96c.78 0 1.27.42 1.27 1.16 0 .73-.49 1.16-1.27 1.16Z" />
  </svg>
);
export default SvgEsquarefillBold;
