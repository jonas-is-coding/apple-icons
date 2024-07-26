import * as React from "react";
const SvgCylinderfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 19.481c0 3.64 4.21 6.14 10.58 6.14 6.38 0 10.58-2.5 10.58-6.14V5.531c0-3.32-4.22-5.53-10.58-5.53S.002 2.211.002 5.531Zm2.83-13.95c0-1.71 3.17-2.96 7.75-2.96s7.75 1.25 7.75 2.96c0 1.63-3.2 2.84-7.75 2.84s-7.75-1.21-7.75-2.84" />
  </svg>
);
export default SvgCylinderfillBold;
