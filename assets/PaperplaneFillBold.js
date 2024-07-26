import * as React from "react";
const SvgPaperplanefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15.027 25.253c.99 0 1.68-.74 2.12-1.87l7.83-20.49c.18-.49.29-.94.29-1.32 0-.96-.62-1.57-1.57-1.57-.4 0-.85.09-1.33.28l-20.54 7.86c-1.05.4-1.83 1.09-1.83 2.1 0 1.18.87 1.69 2.07 2.06l5.62 1.74c.94.29 1.51.28 2.22-.34l13.35-12.24c.19-.16.41-.15.56-.01.12.13.15.36-.02.55l-12.21 13.36c-.58.63-.64 1.31-.36 2.22l1.71 5.56c.38 1.22.89 2.11 2.09 2.11" />
  </svg>
);
export default SvgPaperplanefillBold;
