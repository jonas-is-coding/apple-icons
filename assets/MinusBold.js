import * as React from "react";
const SvgMinusBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.742 3.549h16.56c.94 0 1.76-.81 1.76-1.78 0-.96-.82-1.77-1.76-1.77H1.742c-.89 0-1.74.81-1.74 1.77 0 .97.85 1.78 1.74 1.78" />
  </svg>
);
export default SvgMinusBold;
