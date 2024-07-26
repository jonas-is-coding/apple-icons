import * as React from "react";
const SvgDieface1FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.07-9.21c-1.1-.01-1.98-.89-1.98-1.99 0-1.09.88-1.97 1.98-1.97 1.09 0 1.97.88 1.97 1.97 0 1.11-.89 2-1.97 1.99" />
  </svg>
);
export default SvgDieface1FillBold;
