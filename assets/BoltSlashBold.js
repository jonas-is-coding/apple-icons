import * as React from "react";
const SvgBoltslashBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m7.669 7.477 1.62 1.64 2.08-2.73-1.51 3.28 3.36 3.37h2.41l-1.04 1.37 1.72 1.71 2.73-3.43c.23-.29.34-.56.34-.86 0-.54-.42-.94-.98-.94h-6.82l3.43-9.31c.52-1.42-.95-2.16-1.86-1.01Zm11.35 16.42c.39.38 1.03.39 1.4 0a.99.99 0 0 0 0-1.39L1.689 3.787a.996.996 0 0 0-1.41 0c-.37.38-.37 1.02 0 1.4Zm-17.67-8.04c0 .55.41.94.98.94h6.82l-3.43 9.31c-.52 1.42.95 2.17 1.85 1.01l5.49-6.9-1.63-1.63-2.07 2.71 1.52-3.27-3.39-3.38h-2.39l1.04-1.36-1.73-1.71-2.72 3.43c-.22.28-.34.56-.34.85" />
  </svg>
);
export default SvgBoltslashBold;
