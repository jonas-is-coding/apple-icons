import * as React from "react";
const SvgCapsuleoncapsuleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 9.772c0 4.57 2.45 7.93 6.39 9.2 1.25 3.95 4.79 6.39 9.58 6.39h5.9c6.04 0 10.09-3.88 10.09-9.76 0-4.59-2.47-7.96-6.43-9.23-1.24-3.92-4.78-6.37-9.55-6.37h-5.89c-6.06 0-10.09 3.9-10.09 9.77m3 0c0-4.12 2.76-6.77 7.1-6.77h5.89c2.71 0 4.8 1.04 5.98 2.83h-6c-6 0-10.01 3.82-10.09 9.61-1.82-1.15-2.88-3.13-2.88-5.67m5.89 5.83c0-4.13 2.76-6.78 7.09-6.78h5.9c4.32 0 7.09 2.65 7.09 6.78s-2.77 6.76-7.09 6.76h-5.9c-4.33 0-7.09-2.63-7.09-6.76" />
  </svg>
);
export default SvgCapsuleoncapsuleBold;
