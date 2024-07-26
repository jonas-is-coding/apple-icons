import * as React from "react";
const SvgShekelsignsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m6.03-5.9c-.74 0-1.25-.38-1.25-1.2v-5.34c0-.57.29-.94.85-.94.55 0 .83.37.83.94v4.75h2.66c1.45 0 1.71-.39 1.71-1.82v-6.11c0-.58.34-.96.88-.96s.89.38.89.96v6.45c0 2.16-.92 3.27-3.1 3.27Zm-3.47.08c-.56 0-.89-.34-.89-.95v-8.3c0-.98.52-1.43 1.49-1.43h3.22c2.15 0 3.12.89 3.12 3.13v3.47c0 .55-.33.9-.84.9-.53 0-.85-.35-.85-.9v-3.06c0-1.44-.53-1.76-1.85-1.76h-2.53v7.95c0 .6-.31.95-.87.95" />
  </svg>
);
export default SvgShekelsignsquarefillBold;
