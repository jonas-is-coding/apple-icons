import * as React from "react";
const SvgAngleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 20.31c0 .82.69 1.51 1.51 1.51h25.71c.83 0 1.51-.69 1.51-1.51s-.68-1.51-1.51-1.51h-9.22a16.1 16.1 0 0 0-3.72-9.13l7.09-7.09c.6-.59.59-1.55 0-2.14-.58-.58-1.54-.59-2.13 0L.462 19.24c-.27.28-.46.68-.46 1.07m5.15-1.51 6.99-6.99c1.59 1.98 2.59 4.4 2.82 6.99Z" />
  </svg>
);
export default SvgAngleBold;
