import * as React from "react";
const SvgSurfboardfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.447 9.334c-4.6 4.59-8.18 9.54-9.84 13.86-.94 2.48-.79 4.51.49 6.09l28.1-28.09c-3.8-3.08-10.48-.14-18.75 8.14m19.58-7.31-28.09 28.09c1.57 1.28 3.6 1.44 6.09.49 4.32-1.66 9.26-5.23 13.85-9.83 8.29-8.28 11.23-14.95 8.15-18.75" />
  </svg>
);
export default SvgSurfboardfillBold;
