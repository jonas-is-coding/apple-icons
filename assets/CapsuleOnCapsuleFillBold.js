import * as React from "react";
const SvgCapsuleoncapsulefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 9.772c0 3.72 1.62 6.63 4.35 8.27-.16-.77-.23-1.59-.23-2.44 0-6.87 4.84-11.54 11.85-11.54h5.9c.96 0 1.88.1 2.75.26-1.69-2.71-4.75-4.32-8.64-4.32h-5.89c-6.06 0-10.09 3.9-10.09 9.77m5.88 5.83c0 5.88 4.04 9.76 10.09 9.76h5.9c6.04 0 10.09-3.88 10.09-9.76s-4.05-9.77-10.09-9.77h-5.9c-6.05 0-10.09 3.89-10.09 9.77" />
  </svg>
);
export default SvgCapsuleoncapsulefillBold;
