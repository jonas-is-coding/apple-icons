import * as React from "react";
const SvgPausefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.872 21.12h2.9c1.24 0 1.87-.64 1.87-1.88V1.88C6.642.63 6.012 0 4.772 0h-2.9C.632 0 .002.63.002 1.88v17.36c0 1.24.61 1.88 1.87 1.88m9.5 0h2.89c1.24 0 1.88-.64 1.88-1.88V1.88c0-1.25-.64-1.88-1.88-1.88h-2.89c-1.25 0-1.88.63-1.88 1.88v17.36c0 1.24.61 1.88 1.88 1.88" />
  </svg>
);
export default SvgPausefillBold;
