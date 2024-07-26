import * as React from "react";
const SvgAlternatingcurrentBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M23.216 4.363c-1.07 1.61-2.32 2.4-3.75 2.4-4.81 0-6.7-6.76-12.79-6.76-2.5 0-4.73 1.34-6.37 3.81-1.19 1.8 1.39 3.53 2.6 1.78 1.11-1.63 2.36-2.43 3.77-2.43 4.1 0 5.89 6.75 12.79 6.75 2.5 0 4.71-1.32 6.35-3.77 1.21-1.81-1.41-3.55-2.6-1.78" />
  </svg>
);
export default SvgAlternatingcurrentBold;
