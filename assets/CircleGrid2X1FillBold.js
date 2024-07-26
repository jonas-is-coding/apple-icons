import * as React from "react";
const SvgCirclegrid2X1FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.392 14.786c4.08 0 7.4-3.31 7.4-7.39s-3.32-7.4-7.4-7.4-7.39 3.32-7.39 7.4 3.31 7.39 7.39 7.39m18.3 0c4.07 0 7.39-3.31 7.39-7.39s-3.32-7.4-7.39-7.4c-4.08 0-7.4 3.32-7.4 7.4s3.32 7.39 7.4 7.39" />
  </svg>
);
export default SvgCirclegrid2X1FillBold;
