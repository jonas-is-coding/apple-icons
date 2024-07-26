import * as React from "react";
const SvgCaseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.092 24.367h20.55c2.65 0 4.08-1.42 4.08-4.06v-11.6c0-2.64-1.43-4.05-4.08-4.05h-3.79v-1.33c0-2.24-1.27-3.33-3.63-3.33h-5.74c-2.28 0-3.59 1.09-3.59 3.33v1.33h-3.8c-2.66 0-4.09 1.41-4.09 4.05v11.6c0 2.64 1.43 4.06 4.09 4.06m6.46-20.8c0-.75.42-1.16 1.19-1.16h5.25c.76 0 1.18.41 1.18 1.16v1.09h-7.62Zm-6.27 17.98c-.81 0-1.26-.43-1.26-1.27V8.747c0-.85.45-1.28 1.26-1.28h20.16c.82 0 1.26.43 1.26 1.28v11.53c0 .84-.44 1.27-1.26 1.27Z" />
  </svg>
);
export default SvgCaseBold;
