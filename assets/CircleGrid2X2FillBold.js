import * as React from "react";
const SvgCirclegrid2X2FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17.932 10.39a5.196 5.196 0 1 0 0-10.39c-2.87 0-5.21 2.32-5.21 5.19 0 2.88 2.34 5.2 5.21 5.2m-12.73.02c2.87 0 5.2-2.34 5.2-5.21S8.072 0 5.202 0s-5.2 2.33-5.2 5.2 2.33 5.21 5.2 5.21m12.73 12.09c2.87 0 5.2-2.33 5.2-5.2 0-2.88-2.33-5.21-5.2-5.21s-5.21 2.33-5.21 5.21c0 2.87 2.34 5.2 5.21 5.2m-12.73 0c2.87 0 5.2-2.33 5.2-5.2 0-2.88-2.33-5.21-5.2-5.21s-5.2 2.33-5.2 5.21c0 2.87 2.33 5.2 5.2 5.2" />
  </svg>
);
export default SvgCirclegrid2X2FillBold;
