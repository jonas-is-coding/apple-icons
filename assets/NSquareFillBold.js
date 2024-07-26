import * as React from "react";
const SvgNsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m3.64-5.54c-.84 0-1.32-.55-1.32-1.44v-8.62c0-.83.48-1.35 1.25-1.35.57 0 .89.18 1.38.84l4.24 5.82h.12v-5.22c0-.91.48-1.44 1.31-1.44.85 0 1.34.53 1.34 1.44v8.67c0 .81-.47 1.3-1.24 1.3-.56 0-.89-.19-1.35-.8l-4.3-5.9h-.11v5.26c0 .9-.49 1.44-1.32 1.44" />
  </svg>
);
export default SvgNsquarefillBold;
