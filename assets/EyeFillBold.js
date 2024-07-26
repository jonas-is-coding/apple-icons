import * as React from "react";
const SvgEyefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M16.02 20.343c9.72 0 16.04-7.8 16.04-10.18 0-2.37-6.32-10.16-16.04-10.16C6.47.003 0 7.793 0 10.163c0 2.38 6.46 10.18 16.02 10.18m.01-3.95c-3.44 0-6.23-2.79-6.23-6.22 0-3.45 2.79-6.24 6.23-6.24 3.45 0 6.24 2.79 6.24 6.24 0 3.43-2.79 6.22-6.24 6.22m0-3.77c1.36 0 2.45-1.09 2.45-2.45s-1.09-2.45-2.45-2.45-2.45 1.09-2.45 2.45 1.09 2.45 2.45 2.45" />
  </svg>
);
export default SvgEyefillBold;
