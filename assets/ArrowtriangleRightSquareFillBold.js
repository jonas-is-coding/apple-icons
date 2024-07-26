import * as React from "react";
const SvgArrowtrianglerightsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m5.21-6.34c-.83.51-1.8.07-1.8-.89v-7.96c0-.94.98-1.37 1.8-.89l6.55 3.87c.76.46.79 1.55 0 2.02Z" />
  </svg>
);
export default SvgArrowtrianglerightsquarefillBold;
