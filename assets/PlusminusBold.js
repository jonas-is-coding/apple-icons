import * as React from "react";
const SvgPlusminusBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 7.486c0 1.03.74 1.78 1.78 1.78h4.07v3.98c0 1.03.73 1.77 1.78 1.77 1.03 0 1.77-.74 1.77-1.77v-3.98h4.07c1.05 0 1.79-.75 1.79-1.78s-.74-1.77-1.79-1.77h-4.07v-3.96c0-1.03-.74-1.76-1.77-1.76-1.05 0-1.78.73-1.78 1.76v3.96h-4.07c-1.04 0-1.78.74-1.78 1.77m0 12.37c0 1.03.75 1.77 1.78 1.77h11.69c1.04 0 1.79-.74 1.79-1.77 0-1.04-.75-1.79-1.79-1.79H1.782c-1.03 0-1.78.75-1.78 1.79" />
  </svg>
);
export default SvgPlusminusBold;
