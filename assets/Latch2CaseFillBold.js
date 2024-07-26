import * as React from "react";
const SvgLatch2CasefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M24.642 4.657c2.65 0 4.08 1.41 4.08 4.05v2.22h-5.19v-.18c-.09-.82-.67-1.3-1.57-1.3h-2.79c-.91 0-1.48.48-1.58 1.3v.18h-6.46v-.18c-.1-.82-.68-1.3-1.58-1.3h-2.79c-.91 0-1.48.48-1.58 1.3v.18H.002v-2.22c0-2.64 1.43-4.05 4.09-4.05h3.8v-1.33c0-2.24 1.31-3.33 3.59-3.33h5.74c2.36 0 3.63 1.09 3.63 3.33v1.33Zm-14.09-1.09v1.09h7.62v-1.09c0-.75-.42-1.16-1.18-1.16h-5.25c-.77 0-1.19.41-1.19 1.16m-10.55 9.77h5.18v.17c.1.83.67 1.31 1.58 1.31h2.79c.9 0 1.48-.48 1.58-1.31v-.17h6.46v.17c.1.83.67 1.31 1.58 1.31h2.79c.9 0 1.48-.48 1.57-1.31v-.17h5.19v6.97c0 2.64-1.43 4.06-4.08 4.06H4.092c-2.66 0-4.09-1.42-4.09-4.06Z" />
  </svg>
);
export default SvgLatch2CasefillBold;
