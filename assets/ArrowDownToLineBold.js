import * as React from "react";
const SvgArrowdowntolineBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.812 24.085c0-.92-.69-1.64-1.62-1.64h-7.68c.43-.03.86-.21 1.15-.51l7.62-7.64c.35-.35.53-.77.53-1.22 0-.96-.69-1.64-1.61-1.64-.5 0-.9.23-1.22.54l-2.62 2.63-2.36 2.72.11-2.56V1.755c0-1.04-.68-1.75-1.7-1.75-1.01 0-1.7.71-1.7 1.75v13.01l.1 2.54-2.35-2.7-2.64-2.63c-.3-.31-.7-.54-1.22-.54-.91 0-1.6.68-1.6 1.64 0 .45.17.87.53 1.22l7.62 7.64c.3.3.73.48 1.15.51h-7.67c-.93 0-1.63.72-1.63 1.64s.7 1.64 1.63 1.64h15.56c.93 0 1.62-.72 1.62-1.64" />
  </svg>
);
export default SvgArrowdowntolineBold;
