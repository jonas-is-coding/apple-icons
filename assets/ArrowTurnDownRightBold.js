import * as React from "react";
const SvgArrowturndownrightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.852-.002c-1.11 0-1.59.88-1.71 1.62-.12.65-.14 1.31-.14 1.99 0 5.25 2.31 7.86 7.5 7.86h7.02l2.66-.15-2.69 2.42-2.61 2.62c-.32.31-.54.7-.54 1.22 0 .91.68 1.61 1.68 1.61.41 0 .83-.18 1.2-.54l7.62-7.62c.33-.32.53-.8.53-1.26 0-.45-.2-.93-.53-1.25l-7.64-7.63c-.35-.34-.77-.53-1.18-.53-1 0-1.68.71-1.68 1.62 0 .51.22.9.54 1.22l2.61 2.61 2.7 2.43-2.67-.16h-6.75c-3.19 0-4.35-1.31-4.35-4.5 0-.81.06-1.4.06-1.9 0-1.01-.65-1.68-1.63-1.68" />
  </svg>
);
export default SvgArrowturndownrightBold;
