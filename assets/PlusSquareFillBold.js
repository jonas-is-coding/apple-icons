import * as React from "react";
const SvgPlussquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m1.39-11.2c0-.8.57-1.38 1.37-1.38h3v-3c0-.79.57-1.37 1.37-1.37s1.38.58 1.38 1.37v3h3.02c.78 0 1.36.58 1.36 1.38s-.58 1.38-1.36 1.38h-3.02v3c0 .79-.58 1.36-1.38 1.36s-1.37-.57-1.37-1.36v-3h-3c-.78 0-1.37-.58-1.37-1.38" />
  </svg>
);
export default SvgPlussquarefillBold;
