import * as React from "react";
const SvgChevroncompactdownBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m1.082 3.465 7.75 3.34c.77.34 1.34.59 2.04.59.72 0 1.29-.25 2.04-.59l7.77-3.34c.63-.28 1.08-.84 1.08-1.54 0-1.16-.86-1.92-1.84-1.92-.54 0-1.24.31-1.82.58l-7.23 3.08-7.22-3.08c-.57-.27-1.26-.58-1.82-.58-.98 0-1.83.76-1.83 1.92 0 .7.44 1.26 1.08 1.54" />
  </svg>
);
export default SvgChevroncompactdownBold;
