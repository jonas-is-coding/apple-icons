import * as React from "react";
const SvgFsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m4.6-5.54c-.97 0-1.52-.65-1.52-1.7v-7.78c0-1.11.56-1.75 1.65-1.75h5.3c.78 0 1.26.44 1.26 1.17s-.48 1.16-1.26 1.16h-3.92v2.3h3.68c.68 0 1.1.39 1.1 1.06 0 .66-.42 1.05-1.1 1.05h-3.65v2.79c0 1.05-.57 1.7-1.54 1.7" />
  </svg>
);
export default SvgFsquarefillBold;
