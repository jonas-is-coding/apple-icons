import * as React from "react";
const SvgWindowceilingclosedBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.743 24.355h16.02c1.3 0 2.25-.75 2.6-1.98l5.29-18.94c.56-2.01-.53-3.44-2.59-3.44H8.033c-1.29 0-2.24.75-2.59 1.99l-5.3 18.93c-.55 2.01.54 3.44 2.6 3.44m3.31-13.74 2.01-7.19c.08-.31.28-.48.58-.48h5.74l-2.16 7.67Zm9.16 0 2.16-7.67h5.89c.33 0 .47.17.39.5l-2.02 7.17Zm-12.06 10.29 2.06-7.35h6.19l-2.2 7.86h-5.66c-.33 0-.48-.18-.39-.51m9.04.51 2.19-7.86h6.43l-2.07 7.37c-.09.31-.27.49-.59.49Z" />
  </svg>
);
export default SvgWindowceilingclosedBold;
