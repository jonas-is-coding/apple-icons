import * as React from "react";
const SvgLockslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.405 2.694c1.92 0 3.48 1.38 3.48 3.75l-.01 2.8h-3.53l8.61 8.6v-5.6c0-1.81-.78-2.79-2.31-2.96l.02-2.7c.01-4.18-2.83-6.58-6.26-6.58-2.51 0-4.69 1.3-5.65 3.65l2.23 2.22c.21-2.01 1.64-3.18 3.42-3.18m10.54 22.15c.39.39 1.04.39 1.4 0 .37-.39.39-1.01 0-1.39L1.685 1.804a.984.984 0 0 0-1.4 0c-.38.38-.38 1.02 0 1.4Zm-16.25-.87h11.43c.57 0 1.05-.1 1.43-.3L4.375 9.504h-.05c-.96.39-1.48 1.3-1.48 2.74v8.71c0 2.05.96 3.02 2.85 3.02" />
  </svg>
);
export default SvgLockslashfillBold;
