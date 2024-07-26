import * as React from "react";
const SvgLevelfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.572 13.922h1.49V.002h-1.51c-2.25 0-3.55 1.3-3.55 3.54l.02 6.86c0 2.25 1.29 3.52 3.55 3.52m2.89 0h17.07V.002h-1.66c-.24 3.64-3.05 6.08-6.87 6.08-3.83 0-6.66-2.44-6.88-6.08h-1.66Zm18.45 0h1.5c2.26 0 3.54-1.27 3.55-3.52l.01-6.86c.02-2.24-1.3-3.54-3.56-3.54h-1.5Zm-9.91-9.23c2.95 0 5.1-1.89 5.25-4.69h-1.95c-.09 1.79-1.44 3-3.3 3-1.88 0-3.22-1.21-3.33-3h-1.93c.15 2.81 2.29 4.69 5.26 4.69" />
  </svg>
);
export default SvgLevelfillBold;
