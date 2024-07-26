import * as React from "react";
const SvgPentagonlefthalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m.26 12.217 3.43 10.44c.62 1.9 2.01 2.93 4.02 2.93h11.02c2.01 0 3.4-1.03 4.02-2.93l3.42-10.42c.64-1.94.1-3.59-1.49-4.76L15.74.907c-1.65-1.21-3.39-1.21-5.04 0l-8.94 6.57c-1.6 1.17-2.13 2.82-1.5 4.74m12.96-9.19c.28 0 .57.12.89.34l8.67 6.39c.63.48.8.98.56 1.71L20 21.597c-.22.71-.69 1.04-1.43 1.04h-5.35Z" />
  </svg>
);
export default SvgPentagonlefthalffilledBold;
