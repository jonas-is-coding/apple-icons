import * as React from "react";
const SvgChevronleftsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m9.59-5.26c-.41.41-1.27.4-1.72-.02l-4.75-4.46c-.82-.77-.83-2.12 0-2.89l4.75-4.45a1.25 1.25 0 0 1 1.7-.04c.5.47.51 1.29.02 1.75l-4.47 4.18 4.47 4.18c.48.46.51 1.25 0 1.75" />
  </svg>
);
export default SvgChevronleftsquarefillBold;
