import * as React from "react";
const SvgPlusBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 10.056c0 .98.8 1.78 1.78 1.78h6.5v6.5c0 .98.79 1.79 1.77 1.79.99 0 1.78-.81 1.78-1.79v-6.5h6.51c.97 0 1.77-.8 1.77-1.78 0-.97-.8-1.77-1.77-1.77h-6.51v-6.5c0-.98-.79-1.79-1.78-1.79-.98 0-1.77.81-1.77 1.79v6.5h-6.5c-.98 0-1.78.8-1.78 1.77" />
  </svg>
);
export default SvgPlusBold;
