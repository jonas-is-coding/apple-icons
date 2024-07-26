import * as React from "react";
const SvgPersonslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M22.433 23.827c.39.37 1.02.37 1.39-.01a.993.993 0 0 0 0-1.4L1.693.296a1 1 0 0 0-1.42 0c-.36.36-.36 1.02 0 1.39Zm-6.45-17.22c0-2.86-2.16-5.14-4.79-5.14-1.58 0-3 .86-3.87 2.14l6.99 7c1.03-.96 1.67-2.38 1.67-4m-14.76 14.41c0 1.15.85 1.84 2.28 1.84h15.38c.09 0 .17 0 .26-.02l-8.91-8.89c-5.52.4-9.01 4.23-9.01 7.07" />
  </svg>
);
export default SvgPersonslashfillBold;
