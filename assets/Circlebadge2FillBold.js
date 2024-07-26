import * as React from "react";
const SvgCirclebadge2FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M25.942 8.978c0-4.96-4.02-8.98-8.99-8.98q-.855 0-1.68.18c2.76 1.96 4.58 5.19 4.58 8.8 0 3.6-1.82 6.83-4.58 8.8a8 8 0 0 0 1.71.18c4.94 0 8.96-4.04 8.96-8.98m-16.97 8.98c4.95 0 8.98-4.04 8.98-8.98 0-4.96-4.03-8.98-8.98-8.98s-8.97 4.02-8.97 8.98c0 4.94 4.02 8.98 8.97 8.98" />
  </svg>
);
export default SvgCirclebadge2FillBold;
