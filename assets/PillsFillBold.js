import * as React from "react";
const SvgPillsfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m14.75 12.652 3.19-3.18c2.38-2.38 2.39-5.55.14-7.8-2.28-2.26-5.43-2.24-7.81.14L7.1 5.002Zm-2.09 2.1-7.65-7.67-3.21 3.2c-2.37 2.38-2.39 5.57-.13 7.81 2.27 2.26 5.42 2.22 7.79-.14Zm16.61 2.4a6.68 6.68 0 0 0-6.55-5.32c-3.22 0-5.91 2.28-6.53 5.32Zm0 2.74H16.19a6.67 6.67 0 0 0 6.53 5.33c3.24 0 5.94-2.28 6.55-5.33" />
  </svg>
);
export default SvgPillsfillBold;
