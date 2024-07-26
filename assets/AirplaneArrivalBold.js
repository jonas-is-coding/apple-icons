import * as React from "react";
const SvgAirplanearrivalBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m3.338 12.266 20.16 5.43c2.45.65 4.84-.1 5.17-1.94.28-1.7-1.52-3.33-3.8-3.77l-7.44-1.47c-.47-.09-.72-.25-1.06-.75l-6.16-8.86a1.54 1.54 0 0 0-.96-.66l-.86-.23c-.45-.11-.81.32-.69.82l1.89 8.12-3.58-.7-3.81-4.45c-.28-.34-.62-.45-1.14-.34l-.47.09c-.43.1-.65.45-.57.87l1.23 6.05c.19.89.91 1.48 2.09 1.79m-1.79 13.16h25.59c.83 0 1.51-.68 1.51-1.51s-.68-1.51-1.51-1.51H1.548c-.83 0-1.51.68-1.51 1.51s.68 1.51 1.51 1.51" />
  </svg>
);
export default SvgAirplanearrivalBold;
