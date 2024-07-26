import * as React from "react";
const SvgArrowdownbackwardBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m.012 4.79-.01 11.73c0 1.06.71 1.77 1.78 1.77h11.74c1 0 1.74-.75 1.74-1.66 0-.9-.77-1.61-1.73-1.61h-4.34l-3.86.14 2.05-1.81 10.36-10.37c.36-.38.56-.81.56-1.26 0-.89-.82-1.72-1.72-1.72-.44 0-.88.2-1.25.56L4.962 10.92l-1.83 2.05.16-3.72V4.77c0-.96-.7-1.72-1.62-1.72-.91 0-1.66.76-1.66 1.74" />
  </svg>
);
export default SvgArrowdownbackwardBold;
