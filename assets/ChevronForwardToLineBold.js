import * as React from "react";
const SvgChevronforwardtolineBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 19.42c0 1.02.85 1.84 1.89 1.84.45 0 .84-.12 1.27-.52l9.21-8.67c.37-.32.57-.67.64-1.08v8.49c0 1.04.77 1.78 1.78 1.78.98 0 1.77-.74 1.77-1.78V1.79c0-1.05-.76-1.79-1.77-1.79s-1.78.74-1.78 1.79v8.48a1.82 1.82 0 0 0-.62-1.08L3.162.52c-.43-.4-.82-.52-1.27-.52C.852 0 .002.81.002 1.84c0 .57.23 1.04.61 1.38l7.9 7.41-7.9 7.41c-.38.35-.61.8-.61 1.38" />
  </svg>
);
export default SvgChevronforwardtolineBold;
