import * as React from "react";
const SvgLocationslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M22.465 20.48c.39.39 1.03.39 1.4 0a1 1 0 0 0 0-1.39L5.065.29c-.39-.39-1.03-.39-1.42 0-.36.38-.36 1.02 0 1.4Zm-3.05-8.12 3.98-8.65c1.13-2.48-.77-4.24-3.2-3.13l-8.6 3.94ZM6.545 6.84l-5.13 2.35c-2.2.99-1.74 4.13.72 4.13l8.35.03c.12 0 .12-.03.12.11l.01 8.32c0 2.44 3.14 2.97 4.2.65l2.3-5.01Z" />
  </svg>
);
export default SvgLocationslashfillBold;
