import * as React from "react";
const SvgHsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m3.53-5.54c-.98 0-1.55-.65-1.55-1.75v-7.92c0-1.1.57-1.74 1.55-1.74 1 0 1.6.64 1.6 1.74v2.7h4.01v-2.7c0-1.1.58-1.74 1.58-1.74.99 0 1.58.64 1.58 1.74v7.92c0 1.1-.59 1.75-1.58 1.75-1 0-1.58-.65-1.58-1.75v-2.83h-4.01v2.83c0 1.1-.6 1.75-1.6 1.75" />
  </svg>
);
export default SvgHsquarefillBold;
