import * as React from "react";
const SvgArrowtriangleheadclockwiseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 26.772c6.83 0 12.38-5.55 12.38-12.37 0-3.59-1.57-6.96-4.28-9.27-.78-.74-1.77-.65-2.32 0-.61.71-.39 1.62.28 2.28 2.01 1.74 3.24 4.18 3.24 6.99 0 5.13-4.15 9.29-9.3 9.29a9.29 9.29 0 0 1-9.29-9.29c0-4.23 2.8-7.76 6.63-8.88v1.23c0 .92.8 1.16 1.47.65l3.88-2.88c.5-.37.5-1 0-1.36l-3.88-2.89c-.67-.52-1.47-.29-1.47.65v1.4c-5.53 1.19-9.71 6.15-9.71 12.08 0 6.82 5.54 12.37 12.37 12.37" />
  </svg>
);
export default SvgArrowtriangleheadclockwiseBold;
