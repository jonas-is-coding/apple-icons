import * as React from "react";
const SvgArrowdownBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.402-.004c-1.01 0-1.7.71-1.7 1.76v13.01l.11 2.54-2.35-2.72-2.64-2.62c-.3-.32-.7-.53-1.22-.53-.91 0-1.6.68-1.6 1.64 0 .45.17.86.53 1.22l7.61 7.63c.32.33.8.52 1.26.52.47 0 .93-.19 1.25-.52l7.63-7.63c.35-.36.53-.77.53-1.22 0-.96-.69-1.64-1.61-1.64-.5 0-.9.21-1.22.53l-2.63 2.62-2.36 2.72.11-2.54V1.756c0-1.05-.68-1.76-1.7-1.76" />
  </svg>
);
export default SvgArrowdownBold;
