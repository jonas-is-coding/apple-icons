import * as React from "react";
const SvgGreaterthansquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m4.16-6.29c-.79 0-1.36-.56-1.36-1.35 0-.65.3-1.04 1.09-1.36l4.79-2.15v-.11l-4.79-2.2c-.78-.32-1.09-.71-1.09-1.36 0-.78.56-1.34 1.33-1.34.32 0 .55.06.81.19l6.81 3.47c.61.31.91.74.91 1.33 0 .61-.3.99-.91 1.28l-6.81 3.41c-.26.13-.49.19-.78.19" />
  </svg>
);
export default SvgGreaterthansquarefillBold;
