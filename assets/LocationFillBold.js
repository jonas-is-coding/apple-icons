import * as React from "react";
const SvgLocationfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m2.135 13.078 8.32.03c.1 0 .15.04.15.16l.01 8.27c0 2.44 3.14 2.97 4.2.65l8.58-18.72c1.13-2.48-.77-4.24-3.2-3.13l-18.78 8.61c-2.2.99-1.74 4.13.72 4.13" />
  </svg>
);
export default SvgLocationfillBold;
