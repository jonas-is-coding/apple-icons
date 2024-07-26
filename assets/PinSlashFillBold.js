import * as React from "react";
const SvgPinslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.832 0c-.97 0-1.65.63-1.65 1.51 0 .42.17.88.51 1.33.6.75 1.95 1.84 3.64 2.87l-.07 1.06 12.58 12.59c.58-.32.92-.9.92-1.67 0-2.6-2.06-5.16-5.25-6.41l-.38-5.57c1.68-1.02 3.01-2.11 3.61-2.86.35-.45.53-.92.53-1.34 0-.88-.67-1.51-1.64-1.51ZM.282 3.88l21.85 21.83c.4.39 1.03.38 1.4 0 .38-.4.37-1.01 0-1.38L1.682 2.5c-.39-.39-1.03-.4-1.4-.02-.38.38-.37 1.04 0 1.4m2.42 13.81c0 1.18.8 1.96 2.02 1.96h6.14v5.65c0 1.41.99 3.38 1.37 3.38.37 0 1.37-1.97 1.37-3.38v-5.45h.33l-7.68-7.69c-2.2 1.35-3.55 3.43-3.55 5.53" />
  </svg>
);
export default SvgPinslashfillBold;
