import * as React from "react";
const SvgArrowshapedownfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.172 25.87c.52 0 1.09-.19 1.54-.67l8.65-9.34c.7-.77.97-1.29.97-2 0-1.1-.85-1.92-1.94-1.92h-3.95V3.18c0-2.01-1.16-3.18-3.15-3.18h-4.32c-1.98 0-3.14 1.17-3.14 3.18v8.76h-3.92c-1.09 0-1.91.82-1.91 1.91 0 .74.29 1.3.94 2.01l8.69 9.32c.43.48 1.04.69 1.54.69" />
  </svg>
);
export default SvgArrowshapedownfillBold;
