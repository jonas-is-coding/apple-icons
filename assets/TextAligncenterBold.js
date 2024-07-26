import * as React from "react";
const SvgTextaligncenterBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.292 2.576h22.56c.71 0 1.29-.57 1.29-1.29 0-.71-.58-1.29-1.29-1.29H1.292c-.72 0-1.29.58-1.29 1.29 0 .72.57 1.29 1.29 1.29m4.74 6.14h13.07c.71 0 1.29-.57 1.29-1.29 0-.71-.58-1.29-1.29-1.29H6.032c-.71 0-1.29.58-1.29 1.29 0 .72.58 1.29 1.29 1.29m-4.74 6.13h22.56c.71 0 1.29-.56 1.29-1.29 0-.71-.58-1.29-1.29-1.29H1.292c-.72 0-1.29.58-1.29 1.29 0 .73.57 1.29 1.29 1.29m4.74 6.14h13.07c.71 0 1.29-.57 1.29-1.29 0-.71-.58-1.29-1.29-1.29H6.032c-.71 0-1.29.58-1.29 1.29 0 .72.58 1.29 1.29 1.29" />
  </svg>
);
export default SvgTextaligncenterBold;
