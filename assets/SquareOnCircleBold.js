import * as React from "react";
const SvgSquareoncircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 10.61c0 4.86 3.27 8.96 7.74 10.2v2.28c0 2.66 1.47 4.11 4.14 4.11h12.05c2.67 0 4.13-1.45 4.13-4.11V10.98c0-2.66-1.46-4.11-4.13-4.11h-3.41A10.6 10.6 0 0 0 10.592 0C4.742 0 .002 4.75.002 10.61m2.89 0c0-4.29 3.41-7.7 7.7-7.7 2.93 0 5.45 1.58 6.75 3.96h-5.46c-2.67 0-4.14 1.45-4.14 4.11v6.79a7.655 7.655 0 0 1-4.85-7.16m9.32 13.57c-.94 0-1.44-.47-1.44-1.47V11.36c0-1 .5-1.47 1.44-1.47h11.39c.95 0 1.44.47 1.44 1.47v11.35c0 1-.49 1.47-1.44 1.47Z" />
  </svg>
);
export default SvgSquareoncircleBold;
