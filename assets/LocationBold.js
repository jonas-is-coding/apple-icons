import * as React from "react";
const SvgLocationBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.44 8.948c-2.27 1.03-1.72 4.2.73 4.21l8.34.02c.08 0 .11.02.11.11l.01 8.29c.01 2.49 3.2 2.98 4.25.66l8.58-18.72c1.15-2.49-.75-4.31-3.25-3.17Zm4.42 1.3c-.06 0-.07-.03 0-.07l14.05-6.4c.08-.03.15-.01.09.1l-6.41 14.03c-.03.06-.08.05-.08-.01l.05-6.16c.01-1.09-.44-1.54-1.53-1.52Z" />
  </svg>
);
export default SvgLocationBold;
