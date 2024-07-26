import * as React from "react";
const SvgArrowshapeforwardfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M25.878 11.169c0-.52-.21-1.09-.68-1.54l-9.34-8.64c-.78-.71-1.29-.99-1.99-.99-1.11 0-1.94.87-1.94 1.96v3.95h-8.75c-2.01 0-3.18 1.16-3.18 3.14v4.31c0 1.99 1.17 3.14 3.18 3.14h8.75v3.93c0 1.09.83 1.92 1.92 1.92.73 0 1.3-.29 2.01-.94l9.33-8.69c.46-.45.69-1.05.69-1.55" />
  </svg>
);
export default SvgArrowshapeforwardfillBold;
