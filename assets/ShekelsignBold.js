import * as React from "react";
const SvgShekelsignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.392 20.82h6.77c4.17 0 5.98-2.13 5.98-6.34V1.76c0-1.08-.63-1.76-1.64-1.76-1.02 0-1.65.68-1.65 1.76v12.13c0 2.8-.51 3.61-3.39 3.61h-5.27V7.93c0-1.04-.52-1.72-1.56-1.72-1.08 0-1.6.71-1.6 1.72V18.6c0 1.47.93 2.22 2.36 2.22m-6.74.17c1.09 0 1.65-.73 1.65-1.76V3.48h5.01c2.68 0 3.63.73 3.63 3.5V13c0 1.11.61 1.73 1.59 1.73.96 0 1.56-.62 1.56-1.73V6.2c0-4.27-1.74-6.03-5.99-6.03h-6.35C.972.17.002 1.09.002 2.8v16.43c0 1.04.57 1.76 1.65 1.76" />
  </svg>
);
export default SvgShekelsignBold;
