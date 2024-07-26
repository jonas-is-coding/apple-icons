import * as React from "react";
const SvgDistributeverticaltopfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.392 2.82h27.34c.76 0 1.39-.64 1.39-1.4 0-.78-.63-1.42-1.39-1.42H1.392C.622 0 .002.64.002 1.42c0 .76.62 1.4 1.39 1.4m8.48 11.42h10.37c1.95 0 3.13-1.16 3.13-3.08V7.77c0-1.92-1.18-3.08-3.13-3.08H9.872c-1.95 0-3.13 1.16-3.13 3.08v3.39c0 1.92 1.18 3.08 3.13 3.08m-8.48 5.84h27.34c.76 0 1.39-.64 1.39-1.41 0-.78-.63-1.42-1.39-1.42H1.392c-.77 0-1.39.64-1.39 1.42 0 .77.62 1.41 1.39 1.41m4.51 11.42h18.31c1.94 0 3.13-1.16 3.13-3.09v-3.39c0-1.91-1.19-3.07-3.13-3.07H5.902c-1.94 0-3.12 1.16-3.12 3.07v3.39c0 1.93 1.18 3.09 3.12 3.09" />
  </svg>
);
export default SvgDistributeverticaltopfillBold;
