import * as React from "react";
const SvgYsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.13-5.54c-1.01 0-1.59-.68-1.59-1.79v-2.01l-3.11-5.4a1.7 1.7 0 0 1-.23-.86c0-.77.61-1.35 1.45-1.35.73 0 1.09.26 1.47 1.08l1.98 3.75h.09l1.99-3.75c.38-.82.73-1.08 1.44-1.08.86 0 1.46.57 1.46 1.37 0 .29-.07.56-.24.84l-3.09 5.39v2.02c0 1.12-.59 1.79-1.62 1.79" />
  </svg>
);
export default SvgYsquarefillBold;
