import * as React from "react";
const SvgArrowtrianglebackwardfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17.59.003c-.54 0-.98.22-1.64.54L1.63 7.413C.52 7.953 0 8.613 0 9.503s.52 1.56 1.63 2.09l14.32 6.88c.66.31 1.11.53 1.65.53 1.07 0 1.94-.82 1.94-2.19V2.193c0-1.37-.87-2.19-1.95-2.19" />
  </svg>
);
export default SvgArrowtrianglebackwardfillBold;
