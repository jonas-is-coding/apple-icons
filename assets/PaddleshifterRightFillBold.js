import * as React from "react";
const SvgPaddleshifterrightfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.982 18.687c0-5-1.98-11.98-6.9-17.12-1.09-1.15-2.86-2.06-4.91-1.27l-1.15.45c-2.41.95-3.15 2.68-2.15 4.98 1.82 4.15 2.28 7.24 2.28 9.69 0 .84-.42 1.32-1.3 1.32h-2.88c-1.09 0-1.97.87-1.97 2.06v2.71c0 1.11.78 1.91 1.74 1.91h2.17c.55 0 .85.26.85.74 0 .46-.26.95-.26 1.84 0 2.01 1.12 3.52 3.36 4.6l2.36 1.13c2.22 1.08 4.46.46 5.74-1.64 2.12-3.47 3.02-6.98 3.02-11.4" />
  </svg>
);
export default SvgPaddleshifterrightfillBold;
