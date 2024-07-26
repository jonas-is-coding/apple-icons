import * as React from "react";
const SvgKipsignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.502 21.53c1.28 0 2.05-.8 2.05-2.11v-8.35h1l6.34 9.29c.45.75.96 1.17 1.83 1.17 1.27 0 1.97-.86 1.97-1.81 0-.58-.16-1.06-.52-1.56l-5.41-7.09h5.9c.4 0 .7-.29.7-.69 0-.41-.3-.7-.7-.7h-5.83l5.32-6.74c.29-.39.45-.83.45-1.25 0-1.06-.86-1.69-1.86-1.69-.77 0-1.27.42-1.69 1.04l-6.41 8.64h-1.09V2.12C6.552.81 5.782 0 4.502 0c-1.26 0-2.03.8-2.03 2.11v7.57H.702c-.4 0-.7.29-.7.7 0 .4.3.69.7.69h1.77v8.35c0 1.31.77 2.11 2.03 2.11" />
  </svg>
);
export default SvgKipsignBold;
