import * as React from "react";
const SvgBoltBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m6.221 27.117 11.47-14.43c.23-.29.34-.56.34-.86 0-.54-.42-.94-.98-.94h-6.82l3.43-9.31c.52-1.42-.95-2.16-1.86-1.01L.341 15.007c-.22.28-.34.56-.34.85 0 .55.41.94.98.94h6.82l-3.43 9.31c-.52 1.42.95 2.17 1.85 1.01m4.91-12.47h-7.38l6.23-8.21-3.08 6.6h7.38l-6.23 8.21Z" />
  </svg>
);
export default SvgBoltBold;
