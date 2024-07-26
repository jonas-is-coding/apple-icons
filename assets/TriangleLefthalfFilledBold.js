import * as React from "react";
const SvgTrianglelefthalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M0 19.261c0 1.95 1.43 3.59 3.56 3.59h17.97c2.14 0 3.58-1.64 3.58-3.59 0-.58-.15-1.18-.48-1.74l-8.98-15.73a3.56 3.56 0 0 0-3.1-1.79c-1.22 0-2.39.6-3.08 1.79l-9 15.72a3.54 3.54 0 0 0-.47 1.75m12.55.73V3.131c.33 0 .67.14.86.45l8.46 14.89c.08.16.1.36.1.5 0 .54-.38 1.02-.97 1.02Z" />
  </svg>
);
export default SvgTrianglelefthalffilledBold;
