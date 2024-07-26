import * as React from "react";
const SvgEllipsisBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.622 5.246c1.46 0 2.63-1.17 2.63-2.62s-1.17-2.63-2.63-2.63c-1.45 0-2.62 1.18-2.62 2.63s1.17 2.62 2.62 2.62m8.85 0c1.45 0 2.64-1.17 2.64-2.62s-1.19-2.63-2.64-2.63c-1.44 0-2.62 1.18-2.62 2.63s1.18 2.62 2.62 2.62m8.86 0c1.44 0 2.62-1.17 2.62-2.62s-1.18-2.63-2.62-2.63c-1.45 0-2.64 1.18-2.64 2.63s1.19 2.62 2.64 2.62" />
  </svg>
);
export default SvgEllipsisBold;
