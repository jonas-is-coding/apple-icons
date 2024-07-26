import * as React from "react";
const SvgArrowrightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M22.812 9.406c0-.45-.19-.93-.51-1.25l-7.63-7.62c-.36-.36-.78-.54-1.2-.54-.99 0-1.67.7-1.67 1.61 0 .51.22.91.54 1.22l2.62 2.63 2.59 2.4-2.55-.15H1.762c-1.06 0-1.76.68-1.76 1.7 0 1.01.7 1.7 1.76 1.7h13.24l2.56-.14-2.6 2.39-2.62 2.63c-.32.3-.54.71-.54 1.22 0 .91.68 1.6 1.67 1.6.42 0 .84-.17 1.19-.52l7.64-7.62c.32-.32.51-.8.51-1.26" />
  </svg>
);
export default SvgArrowrightBold;
