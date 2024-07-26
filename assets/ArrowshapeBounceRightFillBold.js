import * as React from "react";
const SvgArrowshapebouncerightfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.482 22.429c.61 0 1.13-.3 1.41-1 1.17-3.3 2.93-4.78 5.78-4.78h.3v3.78c0 1.09.82 1.92 1.91 1.92.74 0 1.3-.29 2.01-.94l9.32-8.69c.48-.45.69-1.05.69-1.55 0-.52-.21-1.09-.68-1.54l-9.33-8.64c-.77-.71-1.29-.99-2-.99-1.1 0-1.92.87-1.92 1.96v3.79h-.21c-3.37 0-6.32 1.74-7.24 5.82h-.1c-.96-4.34-4.21-5.8-7.54-5.8h-1.03c-1.9 0-2.85.96-2.85 2.97v5.15c0 1.79.94 2.72 2.79 2.72h1.85c2.74 0 4.52 1.98 5.45 4.81.28.71.77 1.01 1.39 1.01" />
  </svg>
);
export default SvgArrowshapebouncerightfillBold;
