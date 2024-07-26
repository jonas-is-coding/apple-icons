import * as React from "react";
const SvgArrowupforwardsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m10.96-7.69c-.75 0-1.21-.52-1.21-1.35v-1.67l.16-1.52-1.47 1.65-3.87 3.89c-.32.31-.67.45-1.08.45-.78 0-1.39-.55-1.39-1.39 0-.36.17-.74.44-1.02l3.92-3.91 1.67-1.47-1.46.19h-1.76c-.84 0-1.36-.47-1.36-1.2 0-.75.52-1.22 1.36-1.22h5.62c1.02 0 1.64.55 1.64 1.61v5.61c0 .82-.47 1.35-1.21 1.35" />
  </svg>
);
export default SvgArrowupforwardsquarefillBold;
