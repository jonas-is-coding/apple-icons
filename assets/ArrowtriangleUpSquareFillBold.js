import * as React from "react";
const SvgArrowtriangleupsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m3.16-7.22c-.96 0-1.37-.98-.89-1.8l3.85-6.55c.47-.78 1.56-.8 2.03 0l3.86 6.55c.49.83.07 1.8-.89 1.8Z" />
  </svg>
);
export default SvgArrowtriangleupsquarefillBold;
