import * as React from "react";
const SvgTrianglerighthalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M0 19.261c0 1.95 1.43 3.59 3.56 3.59h17.97c2.14 0 3.58-1.64 3.58-3.59 0-.58-.15-1.18-.48-1.74l-8.98-15.73a3.56 3.56 0 0 0-3.1-1.79c-1.22 0-2.39.6-3.08 1.79l-9 15.72a3.54 3.54 0 0 0-.47 1.75m3.12-.29c0-.14.04-.33.13-.49l8.47-14.88c.18-.32.5-.47.83-.47v16.86H4.11c-.58 0-.99-.48-.99-1.02" />
  </svg>
);
export default SvgTrianglerighthalffilledBold;
