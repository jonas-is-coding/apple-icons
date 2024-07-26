import * as React from "react";
const SvgOvalportraitlefthalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.322-.005c-6.67 0-11.32 6-11.32 14.49 0 8.48 4.65 14.48 11.32 14.48s11.31-6 11.31-14.48c0-8.49-4.64-14.49-11.31-14.49m0 3.25c4.74 0 8.05 4.61 8.05 11.24 0 6.62-3.31 11.24-8.05 11.24Z" />
  </svg>
);
export default SvgOvalportraitlefthalffilledBold;
