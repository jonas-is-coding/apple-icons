import * as React from "react";
const SvgPinfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M0 17.69c0 1.18.81 1.96 2.02 1.96h6.14v5.65c0 1.41.99 3.38 1.37 3.38.37 0 1.37-1.97 1.37-3.38v-5.65h6.14c1.21 0 2.02-.78 2.02-1.96 0-2.6-2.06-5.16-5.38-6.42l-.39-5.56c1.82-1.03 3.16-2.11 3.76-2.86.35-.45.52-.92.52-1.34C17.57.63 16.9 0 15.93 0H3.13c-.97 0-1.64.63-1.64 1.51 0 .42.16.89.51 1.34.6.75 1.95 1.84 3.77 2.86l-.38 5.56C2.05 12.53 0 15.09 0 17.69" />
  </svg>
);
export default SvgPinfillBold;
