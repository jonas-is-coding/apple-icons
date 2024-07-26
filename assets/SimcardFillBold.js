import * as React from "react";
const SvgSimcardfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.112 25.79h12.55c2.66 0 4.12-1.46 4.12-4.13V9.26c0-1.41-.4-2.46-1.25-3.3l-4.61-4.61C14.012.42 12.902 0 11.412 0h-7.3C1.452 0 .002 1.46.002 4.14v17.52c0 2.67 1.45 4.13 4.11 4.13m.44-11.53v-1.97c0-1.1.62-1.72 1.71-1.72h5.25v11.15h-2.08v-6.56c0-.55-.34-.9-.9-.9Zm8.63 7.46V10.57h1.36c1.08 0 1.71.62 1.71 1.72v7.7c0 1.09-.63 1.73-1.71 1.73Zm-8.63-1.73v-4.05h2.97c.15 0 .25.08.25.23v5.55h-1.51c-1.09 0-1.71-.64-1.71-1.73" />
  </svg>
);
export default SvgSimcardfillBold;
