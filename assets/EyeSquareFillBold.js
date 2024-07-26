import * as React from "react";
const SvgEyesquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.14-6.26c-4.66 0-7.81-3.78-7.81-4.94 0-1.15 3.13-4.93 7.81-4.93 4.7 0 7.8 3.78 7.8 4.93 0 1.16-3.1 4.94-7.8 4.94m0-1.79c1.74 0 3.16-1.44 3.16-3.14 0-1.76-1.42-3.15-3.16-3.15s-3.17 1.39-3.17 3.15c.01 1.7 1.43 3.14 3.17 3.14m0-1.77c-.76 0-1.38-.62-1.38-1.37s.62-1.38 1.38-1.38c.75 0 1.37.63 1.37 1.38s-.62 1.37-1.37 1.37" />
  </svg>
);
export default SvgEyesquarefillBold;
