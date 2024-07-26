import * as React from "react";
const SvgRectanglesplit2X2FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15.432 9.762V.002h8.4c2.69 0 4.14 1.45 4.14 4.11v5.65Zm-2.89 0H.002v-5.65c0-2.66 1.46-4.11 4.14-4.11h8.4Zm2.89 12.64v-9.76h12.54v5.65c0 2.66-1.45 4.11-4.14 4.11Zm-15.43-9.76h12.54v9.76h-8.4c-2.68 0-4.14-1.45-4.14-4.11Z" />
  </svg>
);
export default SvgRectanglesplit2X2FillBold;
