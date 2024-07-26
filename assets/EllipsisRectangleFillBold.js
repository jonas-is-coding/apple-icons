import * as React from "react";
const SvgEllipsisrectanglefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 14.4c0 2.22 1.26 3.46 3.5 3.46h20.58c2.24 0 3.5-1.24 3.5-3.46V3.46c0-2.23-1.26-3.46-3.5-3.46H3.502c-2.24 0-3.5 1.23-3.5 3.46Zm7.94-3.5a1.98 1.98 0 0 1-1.97-1.97c0-1.09.9-1.98 1.97-1.98 1.09 0 1.98.89 1.98 1.98s-.89 1.97-1.98 1.97m5.86 0c-1.09 0-1.98-.88-1.98-1.97s.89-1.98 1.98-1.98 1.98.89 1.98 1.98-.89 1.97-1.98 1.97m5.86 0c-1.09 0-1.98-.88-1.98-1.97s.89-1.98 1.98-1.98c1.08 0 1.98.89 1.98 1.98s-.9 1.97-1.98 1.97" />
  </svg>
);
export default SvgEllipsisrectanglefillBold;
