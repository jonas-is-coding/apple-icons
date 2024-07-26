import * as React from "react";
const SvgPlaceholdertextfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.39.002C1.58.002 0 1.472 0 4.292v12.97c0 2.82 1.58 4.31 4.39 4.31h6.2c2.82 0 4.36-1.49 4.36-4.31V4.292c0-2.82-1.54-4.29-4.36-4.29Z" />
  </svg>
);
export default SvgPlaceholdertextfillBold;
