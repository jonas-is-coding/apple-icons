import * as React from "react";
const SvgSprinklerfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 18.81c0 .76.62 1.38 1.37 1.38h23.55c.77 0 1.38-.63 1.38-1.38s-.63-1.37-1.38-1.37h-9.51v-4.67h.43c1.1 0 1.87-.74 1.87-1.79V8.74c0-1.05-.77-1.79-1.87-1.79h-.43V5.61h.57c1.01 0 1.73-.71 1.73-1.73V2.76c0-1.67-1.15-2.76-2.91-2.76h-3.31c-1.75 0-2.9 1.09-2.9 2.76v1.12c0 1.02.71 1.73 1.73 1.73h.58v1.34h-.45c-1.09 0-1.86.74-1.86 1.79v2.24c0 1.05.77 1.79 1.86 1.79h.45v4.67h-9.53c-.75 0-1.37.62-1.37 1.37" />
  </svg>
);
export default SvgSprinklerfillBold;
