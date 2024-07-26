import * as React from "react";
const SvgPersoncropsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.07-8.96c-2.22-.01-3.93-1.89-3.95-4.3 0-2.29 1.74-4.23 3.95-4.23s3.94 1.94 3.94 4.23c0 2.41-1.71 4.31-3.94 4.3m-7.15 6.03c1.02-2.49 3.83-4.22 7.15-4.22s6.12 1.73 7.15 4.22Z" />
  </svg>
);
export default SvgPersoncropsquarefillBold;
