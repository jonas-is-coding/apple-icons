import * as React from "react";
const SvgPersonfillcheckmarkBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.972 10.39c2.64 0 4.79-2.3 4.79-5.25 0-2.86-2.18-5.14-4.79-5.14s-4.79 2.31-4.79 5.16c0 2.93 2.15 5.23 4.79 5.23m12.22.85c.48 0 .91-.25 1.19-.67l5.04-7.77c.18-.28.3-.59.3-.87 0-.68-.61-1.16-1.26-1.16-.44 0-.8.23-1.09.71l-4.21 6.77-1.95-2.4c-.29-.37-.61-.52-1-.52-.68 0-1.24.54-1.24 1.22 0 .33.12.61.37.91l2.61 3.13c.35.43.74.65 1.24.65M2.282 21.39h15.38c1.43 0 2.28-.69 2.28-1.84 0-3-3.9-7.1-9.97-7.1-6.08 0-9.97 4.1-9.97 7.1 0 1.15.85 1.84 2.28 1.84" />
  </svg>
);
export default SvgPersonfillcheckmarkBold;
