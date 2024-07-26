import * as React from "react";
const SvgTrianglebottomhalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M0 19.261c0 1.95 1.43 3.59 3.57 3.59h17.97c2.14 0 3.57-1.64 3.57-3.59 0-.58-.15-1.19-.48-1.75l-8.98-15.72c-.7-1.19-1.88-1.79-3.09-1.79-1.22 0-2.41.61-3.09 1.79l-9 15.73c-.32.56-.47 1.16-.47 1.74m6.52-6.55 5.19-9.13c.17-.31.53-.45.85-.45.33 0 .66.15.84.47l5.17 9.11Z" />
  </svg>
);
export default SvgTrianglebottomhalffilledBold;
