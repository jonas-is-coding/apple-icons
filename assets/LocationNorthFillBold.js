import * as React from "react";
const SvgLocationnorthfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.82 25.7c.79 0 1.4-.43 2.33-1.35l5.65-5.62c.07-.07.13-.11.19-.11.05 0 .11.04.18.11l5.65 5.62c.93.92 1.54 1.35 2.33 1.35 1.05 0 1.82-.8 1.82-1.96 0-.58-.2-1.25-.47-2L12.21 2.1C11.72.79 11.03 0 9.99 0 8.94 0 8.25.77 7.76 2.1L.47 21.74c-.27.75-.47 1.42-.47 2 0 1.16.79 1.96 1.82 1.96" />
  </svg>
);
export default SvgLocationnorthfillBold;
