import * as React from "react";
const SvgHeartslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M22.11 23.48c.39.39 1.02.39 1.4 0 .37-.39.39-1.01 0-1.38L1.69.29a.996.996 0 0 0-1.41 0c-.37.38-.37 1.02 0 1.39Zm-.71-5.68c2.48-2.78 3.93-5.7 3.93-8.64 0-4.6-3.2-7.7-7.05-7.7-2.39 0-4.12 1.31-5.15 3.24-1.02-1.91-2.76-3.24-5.15-3.24-.87 0-1.69.15-2.46.46Zm-3.75 3.47L1.78 5.4C1.24 6.48.94 7.74.94 9.16c0 5.03 4.23 10.04 10.67 14.25.54.35 1.13.69 1.52.69s.98-.34 1.52-.69c1.05-.69 2.06-1.4 3-2.14" />
  </svg>
);
export default SvgHeartslashfillBold;
