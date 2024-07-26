import * as React from "react";
const SvgCheckmarkBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.442 20.861c.79 0 1.41-.31 1.84-.95l10.92-16.7c.3-.47.43-.9.43-1.31 0-1.1-.82-1.9-1.94-1.9-.78 0-1.26.28-1.73 1.02l-9.58 15.12-4.87-6.04c-.43-.52-.9-.75-1.55-.75-1.14 0-1.96.81-1.96 1.91 0 .49.15.93.57 1.41l6.05 7.32c.5.6 1.07.87 1.82.87" />
  </svg>
);
export default SvgCheckmarkBold;
