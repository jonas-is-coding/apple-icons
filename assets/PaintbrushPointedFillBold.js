import * as React from "react";
const SvgPaintbrushpointedfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M23.547.491c-.59.42-7.03 4.79-11.16 8.44 2.94.99 5.22 3.28 6.22 6.23 3.64-4.15 8.01-10.57 8.44-11.18 1.64-2.34-1.22-5.13-3.5-3.49m-11.29 14.78c.99.98 1.67 2.21 1.91 3.34.82-.17 1.51-.52 2.2-1.14.14-.1.26-.22.39-.35-.41-3.16-3.16-5.94-6.35-6.34-.12.12-.24.23-.34.36-.64.71-1 1.43-1.15 2.24 1.12.22 2.35.9 3.34 1.89m-11.58 7.67c2.4 2.86 7.05 3.54 9.91 1.14 2.37-1.96 2.6-4.86.69-7.15-1.72-2.05-4.5-2.48-6.37-.88-1.77 1.48-1.07 3.18-2.03 3.95-.9.74-1.84.25-2.52.82-.62.54-.38 1.33.32 2.12" />
  </svg>
);
export default SvgPaintbrushpointedfillBold;
