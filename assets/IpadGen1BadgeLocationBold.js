import * as React from "react";
const SvgIpadgen1BadgelocationBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.902 27.876h6.76c-1.56-1.03-1.72-3.58.4-4.64l.54-.26h-8.58V4.896h15.08v15.06l2.39-1.1c.22-.09.43-.15.64-.16V3.816c0-2.35-1.51-3.82-3.91-3.82H3.902c-2.4 0-3.9 1.47-3.9 3.82v20.24c0 2.36 1.5 3.82 3.9 3.82m6.67-24.5c-.43 0-.77-.34-.77-.77a.764.764 0 1 1 1.53 0c0 .43-.34.77-.76.77m1.7 23.23h4.13c.24 0 .4.16.4.39v4.11c0 1.1 1.33 1.47 1.83.32l4.4-9.54c.49-1.05-.48-2.01-1.54-1.53l-9.54 4.41c-1.15.52-.77 1.84.32 1.84" />
  </svg>
);
export default SvgIpadgen1BadgelocationBold;
