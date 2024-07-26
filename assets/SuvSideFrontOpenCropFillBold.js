import * as React from "react";
const SvgSuvsidefrontopencropfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.292 2.523h4.26c.55 0 .87.14 1.2.46l3.55 3.56-2.85.35c-4.79.58-7.29 2.88-7.29 6.85v2.25c0 2.63 1.55 4.1 4 4.1h1.63c-.11-.43-.17-.89-.17-1.34 0-3.19 2.59-5.77 5.78-5.77 3.18 0 5.77 2.58 5.77 5.77 0 .45-.06.91-.17 1.34h5.8V.793c-1.93.39-3.45 1.07-5.29 2.23l-4.35 2.72-4.63-4.62c-.8-.8-1.58-1.12-3.01-1.12h-4.22c-.79 0-1.3.51-1.3 1.25s.5 1.27 1.29 1.27m10.11 20.42c2.32 0 4.2-1.86 4.2-4.19 0-2.32-1.88-4.21-4.2-4.21s-4.21 1.89-4.21 4.21 1.89 4.19 4.21 4.19" />
  </svg>
);
export default SvgSuvsidefrontopencropfillBold;
