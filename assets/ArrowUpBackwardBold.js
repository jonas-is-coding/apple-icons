import * as React from "react";
const SvgArrowupbackwardBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.012 13.5c0 .98.75 1.75 1.66 1.75.92 0 1.62-.77 1.62-1.73V9.05l-.16-3.73 1.83 2.05 10.37 10.36c.37.36.81.56 1.25.56.9 0 1.72-.83 1.72-1.72 0-.44-.2-.88-.56-1.25L7.382 4.95l-2.05-1.82 3.86.14h4.34c.96 0 1.73-.7 1.73-1.61S14.522 0 13.522 0H1.782C.712 0 .002.71.002 1.77Z" />
  </svg>
);
export default SvgArrowupbackwardBold;
