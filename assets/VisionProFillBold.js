import * as React from "react";
const SvgVisionprofillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.072 15.982c2.62 0 4.9 4.09 9.87 4.09 4.74 0 8.2-4.17 8.2-9.81 0-9.38-8.22-10.26-18.07-10.26-9.86 0-18.07.89-18.07 10.26 0 5.64 3.46 9.81 8.21 9.81 4.97 0 7.23-4.09 9.86-4.09" />
  </svg>
);
export default SvgVisionprofillBold;
