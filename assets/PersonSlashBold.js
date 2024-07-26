import * as React from "react";
const SvgPersonslashBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M22.433 23.833c.39.37 1.02.37 1.39-.02.38-.38.39-1 0-1.39L1.693.283c-.39-.37-1.02-.38-1.42 0-.36.38-.36 1.03 0 1.4Zm-10.79-20.2c1.47 0 2.7 1.29 2.7 3.07 0 1.19-.49 2.15-1.23 2.7l1.77 1.77c1.22-1.03 2.01-2.64 2.01-4.47 0-3.07-2.36-5.55-5.25-5.55-1.8 0-3.38.97-4.33 2.46l1.85 1.85c.43-1.11 1.4-1.83 2.48-1.83m5.54 17.25H4.353c-.24 0-.31-.09-.31-.25 0-1.57 2.77-4.55 7.6-4.55.25 0 .51 0 .76.02l-2.4-2.4c-5.3.62-8.78 4.3-8.78 7.41 0 1.53 1.06 2.26 3.21 2.26h14.41c.28 0 .54-.02.79-.04Z" />
  </svg>
);
export default SvgPersonslashBold;
