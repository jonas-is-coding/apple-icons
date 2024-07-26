import * as React from "react";
const SvgOsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.13-5.47c-3.15 0-5.45-2.24-5.45-5.78 0-3.55 2.3-5.78 5.45-5.78 3.17 0 5.46 2.23 5.46 5.78 0 3.54-2.29 5.78-5.46 5.78m0-2.41c1.43 0 2.44-1.24 2.44-3.37s-1.01-3.36-2.44-3.36-2.42 1.23-2.42 3.36.99 3.37 2.42 3.37" />
  </svg>
);
export default SvgOsquarefillBold;
