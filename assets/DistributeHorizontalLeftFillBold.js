import * as React from "react";
const SvgDistributehorizontalleftfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.422 30c.76 0 1.41-.62 1.41-1.4V1.39c0-.77-.65-1.39-1.41-1.39-.78 0-1.42.62-1.42 1.39V28.6c0 .78.64 1.4 1.42 1.4m18.78 0c.76 0 1.41-.62 1.41-1.4V1.39c0-.77-.65-1.39-1.41-1.39-.77 0-1.42.62-1.42 1.39V28.6c0 .78.65 1.4 1.42 1.4m-12.42-2.86h4.38c1.91 0 3.08-1.17 3.08-3.13V5.99c0-1.95-1.17-3.13-3.08-3.13h-4.38c-1.92 0-3.09 1.18-3.09 3.13v18.02c0 1.96 1.17 3.13 3.09 3.13m18.78-3.96h4.39c1.91 0 3.08-1.18 3.08-3.13V9.95c0-1.95-1.17-3.13-3.08-3.13h-4.39c-1.92 0-3.09 1.18-3.09 3.13v10.1c0 1.95 1.17 3.13 3.09 3.13" />
  </svg>
);
export default SvgDistributehorizontalleftfillBold;
