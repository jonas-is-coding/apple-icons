import * as React from "react";
const SvgIpadgen2BadgelocationBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.902 27.876h6.76c-1.01-.63-1.43-1.93-.96-3.02h-5.35c-.88 0-1.33-.46-1.33-1.28V4.296c0-.82.45-1.27 1.33-1.27h12.43c.88 0 1.32.45 1.32 1.27v15.66l2.29-1.05c.25-.11.49-.18.74-.21V3.816c0-2.35-1.51-3.82-3.91-3.82H3.902c-2.4 0-3.9 1.47-3.9 3.82v20.24c0 2.36 1.5 3.82 3.9 3.82m8.37-1.27h4.13c.24 0 .4.16.4.39v4.11c0 1.1 1.33 1.47 1.83.32l4.4-9.54c.49-1.05-.48-2.01-1.54-1.53l-9.54 4.41c-1.15.52-.77 1.84.32 1.84m-5.33-2.85h3.59c.65-.47 1.37-.89 2.25-1.3a.8.8 0 0 0-.27-.04h-5.57c-.39 0-.67.27-.67.67 0 .41.28.67.67.67" />
  </svg>
);
export default SvgIpadgen2BadgelocationBold;
