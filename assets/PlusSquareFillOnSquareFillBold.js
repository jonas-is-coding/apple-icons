import * as React from "react";
const SvgPlussquarefillonsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 15.937c0 2.61 1.42 4.11 4.14 4.11h.32v-9.83c0-3.71 2.31-6.01 6.05-6.01h9.54v-.11c0-2.63-1.47-4.1-4.14-4.1H4.142c-2.68 0-4.14 1.46-4.14 4.12Zm10.51 10.22h11.77c2.67 0 4.13-1.45 4.13-4.11v-11.83c0-2.66-1.46-4.11-4.13-4.11h-11.77c-2.68 0-4.15 1.45-4.15 4.11v11.83c0 2.66 1.47 4.11 4.15 4.11m.14-10.02c0-.8.57-1.4 1.37-1.4h3v-2.98c0-.8.58-1.37 1.37-1.37.8 0 1.39.57 1.39 1.37v2.98h3.01c.78 0 1.36.6 1.36 1.4s-.58 1.37-1.36 1.37h-3.01v3.01c0 .79-.59 1.36-1.39 1.36-.79 0-1.37-.58-1.37-1.36v-3.01h-3c-.78 0-1.37-.57-1.37-1.37" />
  </svg>
);
export default SvgPlussquarefillonsquarefillBold;
