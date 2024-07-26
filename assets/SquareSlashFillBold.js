import * as React from "react";
const SvgSquareslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M22.687 24.071c.39.38 1.02.39 1.4 0a1 1 0 0 0 0-1.39L1.677.281c-.37-.37-1.01-.38-1.4 0-.37.38-.37 1.04 0 1.4ZM19.257.991H5.127c-.18 0-.34.01-.5.03l18.73 18.71c.02-.13.04-.29.04-.45V5.101c0-2.66-1.47-4.11-4.14-4.11m-14.13 22.4h14.13c.18 0 .35-.01.52-.02L1.007 4.631c-.01.15-.02.31-.02.47v14.18c0 2.66 1.46 4.11 4.14 4.11" />
  </svg>
);
export default SvgSquareslashfillBold;
