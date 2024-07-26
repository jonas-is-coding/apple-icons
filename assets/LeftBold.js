import * as React from "react";
const SvgLeftBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.792 17.684h8.2c.99 0 1.65-.56 1.65-1.5 0-.93-.67-1.5-1.65-1.5h-6.39V1.874c0-1.16-.7-1.87-1.81-1.87s-1.79.71-1.79 1.87v13.95c0 1.17.67 1.86 1.79 1.86" />
  </svg>
);
export default SvgLeftBold;
