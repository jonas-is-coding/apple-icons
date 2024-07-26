import * as React from "react";
const SvgIcloudsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m2.82-6.71c-1.75 0-3.06-1.17-3.06-3.04 0-1.44.79-2.53 1.95-3 .2-1.11 1.06-1.93 2.13-2.07.24-.06.53-.06.82-.04a4.46 4.46 0 0 1 3.53-1.71c2.41 0 4.29 1.81 4.46 4.1.02.19.04.38.02.58 1.04.34 1.86 1.26 1.86 2.52 0 1.49-1.14 2.66-2.61 2.66Z" />
  </svg>
);
export default SvgIcloudsquarefillBold;
