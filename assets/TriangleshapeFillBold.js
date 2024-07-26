import * as React from "react";
const SvgTriangleshapefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.03 22.83h21.91c1.35 0 2.04-.8 2.04-1.76 0-.4-.12-.81-.35-1.22L14.74.97C14.39.35 13.71 0 12.99 0s-1.4.35-1.75.97L.34 19.85c-.23.41-.34.82-.34 1.22 0 .96.68 1.76 2.03 1.76" />
  </svg>
);
export default SvgTriangleshapefillBold;
