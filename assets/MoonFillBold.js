import * as React from "react";
const SvgMoonfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17.452 15.283c-5.73 0-9.4-3.56-9.4-9.55 0-1.47.29-3.11.73-4.02.17-.35.25-.65.25-.88 0-.45-.31-.83-.86-.83-.23 0-.54.06-.88.18-4.37 1.77-7.29 6.24-7.29 11.02 0 6.61 5.36 11.98 11.97 11.98 4.88 0 9.11-2.93 10.79-6.95.16-.38.22-.69.22-.89 0-.58-.41-.91-.86-.91-.24 0-.54.1-.9.23-.86.29-2.04.62-3.77.62" />
  </svg>
);
export default SvgMoonfillBold;
