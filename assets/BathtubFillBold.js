import * as React from "react";
const SvgBathtubfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 1.98c0 1.14.84 1.98 1.98 1.98h28.22c1.13 0 1.98-.84 1.98-1.98S31.332 0 30.202 0H1.982C.842 0 .002.84.002 1.98m5.67 17.71c.75.27 1.59-.13 1.86-.87l.73-2.02c.3.03.62.04.95.04h13.77c.32 0 .63-.01.94-.04l.73 2.02c.27.74 1.12 1.14 1.87.87.72-.26 1.12-1.12.85-1.87l-.61-1.66c2.36-1.02 3.58-3.16 3.58-6.33v-4.1H1.852v4.1c0 3.17 1.22 5.31 3.56 6.33l-.6 1.66c-.28.75.11 1.6.86 1.87" />
  </svg>
);
export default SvgBathtubfillBold;
