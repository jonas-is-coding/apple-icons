import * as React from "react";
const SvgMacminifillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 15.96h21.65c2.67 0 4.14-1.46 4.14-4.11V4.11c0-2.66-1.47-4.11-4.14-4.11H4.142C1.462 0 .002 1.45.002 4.11v7.74c0 2.66 1.46 4.11 4.14 4.11m18.97-4.69c-1 .03-1.84-.84-1.84-1.82 0-1.01.84-1.86 1.84-1.86.98 0 1.81.85 1.81 1.86 0 .98-.83 1.81-1.81 1.82" />
  </svg>
);
export default SvgMacminifillBold;
