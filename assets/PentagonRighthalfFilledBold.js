import * as React from "react";
const SvgPentagonrighthalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M26.18 12.217c.63-1.92.09-3.57-1.5-4.74L15.73.907c-1.64-1.21-3.38-1.21-5.03 0l-8.94 6.57c-1.6 1.17-2.13 2.82-1.5 4.76l3.42 10.42c.63 1.9 2.02 2.93 4.03 2.93h11.02c2.01 0 3.4-1.03 4.02-2.93Zm-12.96-9.19v19.61H7.86c-.73 0-1.2-.33-1.44-1.04l-3.33-10.13c-.24-.73-.07-1.23.57-1.71l8.67-6.39c.3-.22.6-.34.89-.34" />
  </svg>
);
export default SvgPentagonrighthalffilledBold;
