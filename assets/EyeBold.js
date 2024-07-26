import * as React from "react";
const SvgEyeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M16.25 20.63c9.86 0 16.26-7.92 16.26-10.32C32.51 7.9 26.1 0 16.25 0 6.55 0 0 7.9 0 10.31c0 2.4 6.55 10.32 16.25 10.32m0-2.96c-7.09 0-12.52-5.76-12.52-7.36 0-1.32 5.43-7.36 12.52-7.36 7.08 0 12.53 6.04 12.53 7.36 0 1.6-5.45 7.36-12.53 7.36m.02-1.5c3.25 0 5.87-2.66 5.87-5.88a5.86 5.86 0 0 0-5.87-5.87c-3.26 0-5.9 2.61-5.9 5.87 0 3.22 2.64 5.88 5.9 5.88m-.03-4.06c-.98 0-1.78-.81-1.78-1.81s.8-1.8 1.78-1.8c1.01 0 1.82.8 1.82 1.8s-.81 1.81-1.82 1.81" />
  </svg>
);
export default SvgEyeBold;
