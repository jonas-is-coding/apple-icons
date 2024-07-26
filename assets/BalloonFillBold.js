import * as React from "react";
const SvgBalloonfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.942 33.16c.58 0 1.06-.48 1.06-1.05 0-2.57 2.32-3.15 2.32-5.75 0-2.62-2.01-3.04-2.25-5.02h.48c.81 0 1.22-.69 1.04-1.38l-.37-1.42c3.41-1.26 5.83-5.39 5.83-10.3 0-4.68-3.3-8.24-8.04-8.24-4.72 0-8.01 3.56-8.01 8.24 0 4.9 2.41 9.03 5.82 10.3l-.37 1.42c-.18.69.23 1.38 1.04 1.38h.48c.17 3.09 2.27 3.4 2.27 5.02 0 1.69-2.33 1.92-2.33 5.75 0 .57.46 1.05 1.03 1.05" />
  </svg>
);
export default SvgBalloonfillBold;
