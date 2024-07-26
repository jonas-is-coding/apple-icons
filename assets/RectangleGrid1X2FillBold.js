import * as React from "react";
const SvgRectanglegrid1X2FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.272 11.203h20.96c2.16 0 3.27-1.09 3.27-3.26v-4.68c0-2.17-1.11-3.26-3.27-3.26H3.272c-2.16 0-3.27 1.09-3.27 3.26v4.68c0 2.17 1.11 3.26 3.27 3.26m0 12.84h20.96c2.16 0 3.27-1.09 3.27-3.25v-4.69c0-2.16-1.11-3.26-3.27-3.26H3.272c-2.16 0-3.27 1.1-3.27 3.26v4.69c0 2.16 1.11 3.25 3.27 3.25" />
  </svg>
);
export default SvgRectanglegrid1X2FillBold;
