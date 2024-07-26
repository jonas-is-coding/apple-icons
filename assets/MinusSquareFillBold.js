import * as React from "react";
const SvgMinussquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m2.74-9.79c-.82 0-1.42-.57-1.42-1.39s.59-1.38 1.42-1.38h8.8c.84 0 1.42.56 1.42 1.38s-.59 1.39-1.42 1.39Z" />
  </svg>
);
export default SvgMinussquarefillBold;
