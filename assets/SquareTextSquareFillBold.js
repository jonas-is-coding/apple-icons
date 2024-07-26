import * as React from "react";
const SvgSquaretextsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.17-17.46c0-.87.49-1.36 1.36-1.36h2.64c.86 0 1.36.49 1.36 1.36v2.65c0 .86-.5 1.36-1.36 1.36h-2.64c-.87 0-1.36-.5-1.36-1.36Zm.77 9.33c-.48 0-.84-.36-.84-.83 0-.45.36-.8.84-.8h11.29c.47 0 .82.35.82.8 0 .47-.35.83-.82.83Zm0 4.04c-.48 0-.84-.36-.84-.81 0-.47.36-.83.84-.83h8.55c.47 0 .82.36.82.83 0 .45-.35.81-.82.81Z" />
  </svg>
);
export default SvgSquaretextsquarefillBold;
