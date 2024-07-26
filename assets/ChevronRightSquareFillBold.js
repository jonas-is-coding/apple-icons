import * as React from "react";
const SvgChevronrightsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m4.39-5.15c-.52-.52-.48-1.3 0-1.77l4.57-4.27-4.57-4.25c-.49-.47-.48-1.29.03-1.77.46-.44 1.22-.44 1.72.03l4.84 4.53c.84.78.83 2.15 0 2.94l-4.84 4.53c-.45.42-1.33.44-1.75.03" />
  </svg>
);
export default SvgChevronrightsquarefillBold;
