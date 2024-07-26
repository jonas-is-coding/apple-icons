import * as React from "react";
const SvgShieldslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M22.11 23.48c.39.39 1.02.39 1.39 0a.98.98 0 0 0 0-1.39L1.68.29C1.31-.1.68-.1.28.29c-.38.37-.37 1.02 0 1.39Zm-.66-5.64c.67-1.06.94-2.25.94-3.71V5.61c0-1.64-.54-2.31-1.98-2.92-1.14-.47-5.32-1.9-6.39-2.24A6 6 0 0 0 12.39.2c-.5 0-1.11.11-1.61.25-.82.26-3.25 1.08-4.98 1.71ZM2.4 6.04v8.09c0 4.19 2.4 6.02 9.13 9.54.3.16.63.24.86.24.24 0 .57-.09.88-.24 1.74-.88 3.17-1.65 4.35-2.38Z" />
  </svg>
);
export default SvgShieldslashfillBold;
