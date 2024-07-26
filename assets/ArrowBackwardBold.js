import * as React from "react";
const SvgArrowbackwardBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 9.406c0 .46.2.94.51 1.26l7.64 7.62c.36.35.78.52 1.19.52.99 0 1.67-.69 1.67-1.6 0-.51-.22-.92-.54-1.22l-2.62-2.63-2.6-2.39 2.56.14h13.25c1.05 0 1.75-.69 1.75-1.7 0-1.02-.7-1.7-1.75-1.7H7.812l-2.55.15 2.59-2.4 2.62-2.63c.32-.31.54-.71.54-1.22 0-.91-.68-1.61-1.67-1.61-.41 0-.83.18-1.2.54l-7.63 7.62c-.31.32-.51.8-.51 1.25" />
  </svg>
);
export default SvgArrowbackwardBold;
