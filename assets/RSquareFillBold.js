import * as React from "react";
const SvgRsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m3.89-5.54c-.91 0-1.4-.59-1.4-1.57v-7.91c0-1.11.55-1.75 1.64-1.75h3.33c2.74 0 4.35 1.34 4.35 3.64 0 1.51-.87 2.74-2.25 3.17l1.52 2.26c.22.31.32.58.32.93 0 .73-.55 1.23-1.33 1.23-.62 0-.97-.25-1.44-1.01l-1.78-2.89h-1.55v2.33c0 .98-.51 1.57-1.41 1.57m1.41-5.98h1.78c1.07 0 1.75-.57 1.75-1.54 0-1-.67-1.6-1.72-1.6h-1.81Z" />
  </svg>
);
export default SvgRsquarefillBold;
