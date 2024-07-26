import * as React from "react";
const SvgMinusrectanglefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m5.46-9.79c-.84 0-1.43-.57-1.43-1.37 0-.84.58-1.4 1.43-1.4h8.8c.84 0 1.41.56 1.41 1.4 0 .8-.59 1.37-1.41 1.37Z" />
  </svg>
);
export default SvgMinusrectanglefillBold;
