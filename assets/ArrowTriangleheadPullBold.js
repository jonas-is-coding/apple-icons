import * as React from "react";
const SvgArrowtriangleheadpullBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.322 22.802c.88 0 1.42-.6 1.42-1.55v-5.96c1.29 1.57 3.18 2.82 5.59 3.71.93.38 1.7-.09 1.97-.77.26-.64.05-1.44-.9-1.88-3.87-1.67-6.66-3.98-6.66-8.15v-1.73h1.91c1 0 1.3-.82.68-1.67L5.222.512c-.49-.68-1.28-.68-1.79 0l-3.1 4.28c-.62.85-.34 1.68.66 1.68h1.93v14.78c0 .95.54 1.55 1.4 1.55" />
  </svg>
);
export default SvgArrowtriangleheadpullBold;
