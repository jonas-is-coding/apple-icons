import * as React from "react";
const SvgOvalportraitbottomhalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.322 28.965c6.67 0 11.31-6 11.31-14.48 0-8.49-4.64-14.49-11.31-14.49s-11.32 6-11.32 14.49c0 8.48 4.65 14.48 11.32 14.48m-8.08-14.48c0-6.62 3.32-11.24 8.08-11.24 4.74 0 8.05 4.61 8.05 11.24Z" />
  </svg>
);
export default SvgOvalportraitbottomhalffilledBold;
