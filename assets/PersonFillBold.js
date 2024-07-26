import * as React from "react";
const SvgPersonfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.972 10.39c2.64 0 4.79-2.3 4.79-5.25 0-2.86-2.18-5.14-4.79-5.14s-4.79 2.31-4.79 5.16c0 2.93 2.15 5.23 4.79 5.23m-7.69 11h15.38c1.43 0 2.28-.69 2.28-1.84 0-3-3.9-7.1-9.97-7.1-6.08 0-9.97 4.1-9.97 7.1 0 1.15.85 1.84 2.28 1.84" />
  </svg>
);
export default SvgPersonfillBold;
