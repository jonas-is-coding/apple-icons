import * as React from "react";
const SvgDistributehorizontalBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M22.092 1.39v27.23c0 .76.64 1.38 1.4 1.38.78 0 1.42-.62 1.42-1.38V1.39c0-.77-.64-1.39-1.42-1.39-.76 0-1.4.62-1.4 1.39m-19.26 0c0-.77-.65-1.39-1.41-1.39-.78 0-1.42.62-1.42 1.39v27.23c0 .76.64 1.38 1.42 1.38.76 0 1.41-.62 1.41-1.38Zm4.86 4.6v18.02c0 1.96 1.16 3.13 3.08 3.13h3.38c1.93 0 3.09-1.17 3.09-3.13V5.99c0-1.95-1.16-3.13-3.09-3.13h-3.38c-1.92 0-3.08 1.18-3.08 3.13m2.84.48c0-.47.28-.75.78-.75h2.29c.5 0 .78.28.78.75v17.06c0 .47-.28.75-.78.75h-2.29c-.5 0-.78-.28-.78-.75Z" />
  </svg>
);
export default SvgDistributehorizontalBold;
