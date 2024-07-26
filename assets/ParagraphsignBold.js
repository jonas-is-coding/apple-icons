import * as React from "react";
const SvgParagraphsignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 6.152c0 3.73 2.74 6.21 6.89 6.21h1.05v9.19c0 1.14.66 1.83 1.73 1.83 1.09 0 1.74-.69 1.74-1.83V3.482h2.16v18.07c0 1.14.64 1.83 1.73 1.83 1.08 0 1.74-.69 1.74-1.83V3.482h1.51c1.14 0 1.83-.67 1.83-1.76 0-1.07-.69-1.72-1.83-1.72h-11.9c-4 0-6.65 2.46-6.65 6.15" />
  </svg>
);
export default SvgParagraphsignBold;
