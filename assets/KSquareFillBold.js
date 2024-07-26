import * as React from "react";
const SvgKsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m3.9-5.66c-.94 0-1.48-.6-1.48-1.64v-7.9c0-1.05.54-1.65 1.48-1.65.93 0 1.47.61 1.47 1.65v3.16h.1l3.67-4.13c.41-.48.72-.68 1.21-.68.77 0 1.38.54 1.38 1.22 0 .4-.11.67-.44 1.03l-2.58 2.81 2.82 3.75c.25.38.37.66.37 1.05 0 .77-.6 1.33-1.42 1.33-.54 0-.89-.21-1.29-.72l-2.64-3.61-1.18 1.29v1.47c0 1-.56 1.57-1.47 1.57" />
  </svg>
);
export default SvgKsquarefillBold;
