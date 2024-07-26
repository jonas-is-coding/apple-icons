import * as React from "react";
const SvgKeyhorizontalfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M29.662 7.958c0-4.43-3.54-7.96-7.95-7.96-3.17 0-6.02 1.83-7.29 4.74H3.402c-.43 0-.84.14-1.14.47l-2 2.13c-.33.36-.38 1.02.04 1.44l3.67 3.67c.47.47 1.17.45 1.64 0l1.84-1.85 2.71 2.69c.44.45 1.16.46 1.63-.01l2.54-2.52c1.56 3.32 4.24 5.16 7.38 5.16 4.4 0 7.95-3.54 7.95-7.96m-7.03 0c0-1.09.88-1.96 1.95-1.96 1.11 0 1.97.87 1.97 1.96 0 1.08-.88 1.97-1.97 1.97-1.07 0-1.95-.89-1.95-1.97" />
  </svg>
);
export default SvgKeyhorizontalfillBold;
