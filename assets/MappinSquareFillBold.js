import * as React from "react";
const SvgMappinsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m4.03-15.31c0-1.72 1.39-3.1 3.11-3.11 1.7 0 3.11 1.38 3.11 3.11 0 1.32-.83 2.46-1.99 2.89v5.68c0 1.45-.5 3.05-1.12 3.05-.64 0-1.13-1.62-1.13-3.05v-5.68a3.11 3.11 0 0 1-1.98-2.89m1.4-.85c.01.54.47 1 .99 1a1 1 0 0 0 .99-1 .986.986 0 0 0-.99-.99c-.52 0-.99.45-.99.99" />
  </svg>
);
export default SvgMappinsquarefillBold;
