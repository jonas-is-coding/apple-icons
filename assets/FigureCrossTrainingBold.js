import * as React from "react";
const SvgFigurecrosstrainingBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.705 5.512c1.52 0 2.76-1.25 2.76-2.76 0-1.52-1.24-2.75-2.76-2.75-1.51 0-2.76 1.23-2.76 2.75 0 1.51 1.25 2.76 2.76 2.76m-7.09 6.2c-1.49 2.05-.15 4.88 2.79 4.44l4.2-.62-1.63 4.82c-.62 1.87 2 2.65 2.58.88l2.28-6.85c.3-.94-.27-1.84-1.35-1.84h-4.1l2.13-2.85c.2-.27.28-.29.57-.29h9.03c.74 0 1.33-.59 1.33-1.34 0-.74-.58-1.35-1.33-1.35H5.625c-.89 0-1.74.46-2.29 1.22Zm.91 15.99c0 .72.51 1.22 1.26 1.22h8.98c.74 0 1.25-.5 1.25-1.22v-3.29c0-.72-.51-1.22-1.25-1.22h-8.98c-.75 0-1.26.5-1.26 1.22Z" />
  </svg>
);
export default SvgFigurecrosstrainingBold;
