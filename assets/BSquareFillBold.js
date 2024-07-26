import * as React from "react";
const SvgBsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m4.33-5.73c-1.12 0-1.71-.6-1.71-1.72v-7.59c0-1.13.6-1.73 1.71-1.73h3.72c2.14 0 3.49 1.05 3.49 2.72 0 1.22-.83 2.17-2.11 2.42v.09c1.66.21 2.64 1.23 2.64 2.76 0 1.83-1.59 3.05-3.93 3.05Zm1.13-6.55h1.4c1.2 0 1.87-.48 1.87-1.32 0-.78-.6-1.26-1.56-1.26h-1.71Zm-.02 4.55h1.53c1.44 0 2.13-.47 2.13-1.42 0-.89-.67-1.42-1.8-1.42h-1.86Z" />
  </svg>
);
export default SvgBsquarefillBold;
