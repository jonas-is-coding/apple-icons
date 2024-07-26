import * as React from "react";
const SvgVisionproslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M29.662 26.274a1 1 0 0 0 1.39 0 .993.993 0 0 0 0-1.4L6.482.294a.996.996 0 0 0-1.41 0 1.01 1.01 0 0 0 0 1.39Zm6.48-13.05c0-9.38-8.22-10.26-18.07-10.26-2.26 0-4.44.06-6.46.23l19.24 19.26c3.18-1.33 5.29-4.83 5.29-9.23m-36.14 0c0 5.64 3.46 9.81 8.21 9.81 4.97 0 7.23-4.09 9.86-4.09 1.29 0 2.49 1.02 4.01 1.97L5.642 4.464c-3.46 1.37-5.64 3.95-5.64 8.76" />
  </svg>
);
export default SvgVisionproslashfillBold;
