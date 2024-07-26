import * as React from "react";
const SvgDistributeverticalcenterfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.392 6.653h6.2v.75c0 1.93 1.17 3.09 3.12 3.09h9.91c1.95 0 3.13-1.16 3.13-3.09v-.75h5.96c.77 0 1.38-.64 1.38-1.41 0-.78-.61-1.42-1.38-1.42h-5.96v-.75c0-1.91-1.18-3.07-3.13-3.07h-9.91c-1.95 0-3.12 1.16-3.12 3.07v.75h-6.2c-.77 0-1.39.64-1.39 1.42 0 .77.62 1.41 1.39 1.41m0 15.18h2.23v.75c0 1.92 1.18 3.08 3.13 3.08h17.83c1.95 0 3.13-1.16 3.13-3.08v-.75h2.24c.77 0 1.4-.65 1.4-1.41 0-.77-.63-1.42-1.4-1.42h-2.24v-.75c0-1.92-1.18-3.08-3.13-3.08H6.752c-1.95 0-3.13 1.16-3.13 3.08v.75h-2.23c-.77 0-1.39.65-1.39 1.42 0 .76.62 1.41 1.39 1.41" />
  </svg>
);
export default SvgDistributeverticalcenterfillBold;
