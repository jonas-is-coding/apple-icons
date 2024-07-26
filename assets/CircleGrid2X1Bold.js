import * as React from "react";
const SvgCirclegrid2X1Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.392 14.786c4.08 0 7.4-3.31 7.4-7.39s-3.32-7.4-7.4-7.4-7.39 3.32-7.39 7.4 3.31 7.39 7.39 7.39m18.3 0c4.07 0 7.39-3.31 7.39-7.39s-3.32-7.4-7.39-7.4c-4.08 0-7.4 3.32-7.4 7.4s3.32 7.39 7.4 7.39m-18.3-2.89a4.505 4.505 0 1 1 0-9.01c2.49 0 4.5 2.01 4.5 4.51a4.5 4.5 0 0 1-4.5 4.5m18.3 0c-2.5 0-4.52-2.02-4.52-4.5 0-2.5 2.02-4.51 4.52-4.51 2.48 0 4.5 2.01 4.5 4.51 0 2.48-2.02 4.5-4.5 4.5" />
  </svg>
);
export default SvgCirclegrid2X1Bold;
