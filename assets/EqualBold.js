import * as React from "react";
const SvgEqualBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.742 3.555h13.97c.93 0 1.75-.81 1.75-1.79 0-.96-.82-1.77-1.75-1.77H1.742c-.89 0-1.74.81-1.74 1.77 0 .98.85 1.79 1.74 1.79m0 8.13h13.97c.93 0 1.75-.81 1.75-1.78 0-.96-.82-1.77-1.75-1.77H1.742c-.89 0-1.74.81-1.74 1.77 0 .97.85 1.78 1.74 1.78" />
  </svg>
);
export default SvgEqualBold;
