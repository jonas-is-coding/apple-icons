import * as React from "react";
const SvgCylinderBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.582 25.621c6.39 0 10.58-2.5 10.58-6.14V5.531c0-3.32-4.22-5.53-10.58-5.53S.002 2.211.002 5.531v13.95c0 3.64 4.19 6.14 10.58 6.14m0-17.25c-4.56 0-7.75-1.21-7.75-2.84 0-1.71 3.17-2.96 7.75-2.96s7.75 1.25 7.75 2.96c0 1.63-3.19 2.84-7.75 2.84m0 2.69c3.22 0 5.89-.56 7.75-1.56v9.98c0 1.85-2.8 3.44-7.75 3.44-4.94 0-7.75-1.59-7.75-3.44v-9.98c1.86 1 4.53 1.56 7.75 1.56" />
  </svg>
);
export default SvgCylinderBold;
