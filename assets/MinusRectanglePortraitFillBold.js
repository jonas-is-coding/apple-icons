import * as React from "react";
const SvgMinusrectangleportraitfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 21.652c0 2.69 1.45 4.14 4.11 4.14h12.55c2.66 0 4.12-1.45 4.12-4.14V4.142c0-2.68-1.46-4.14-4.12-4.14H4.112c-2.66 0-4.11 1.46-4.11 4.14Zm6-7.35c-.83 0-1.43-.56-1.43-1.38s.58-1.38 1.43-1.38h8.8c.84 0 1.42.56 1.42 1.38s-.6 1.38-1.42 1.38Z" />
  </svg>
);
export default SvgMinusrectangleportraitfillBold;
