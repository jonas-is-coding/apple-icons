import * as React from "react";
const SvgBackwardframefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17.64 17.526V2.176c0-1.45-.9-2.18-1.96-2.18-.44 0-.91.12-1.37.39L1.54 7.816C.55 8.386 0 8.966 0 9.856c0 .88.55 1.45 1.54 2.03l12.77 7.44c.46.26.93.38 1.37.38 1.06 0 1.96-.73 1.96-2.18m8.03 2.15c1.26 0 1.88-.63 1.88-1.89V1.906c0-1.24-.63-1.88-1.88-1.88h-2.89c-1.24 0-1.87.64-1.87 1.88v15.88c0 1.26.63 1.89 1.87 1.89Z" />
  </svg>
);
export default SvgBackwardframefillBold;
