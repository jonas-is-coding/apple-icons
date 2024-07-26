import * as React from "react";
const SvgCirclebadgefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.972 17.958c4.95 0 8.98-4.04 8.98-8.98 0-4.96-4.03-8.98-8.98-8.98s-8.97 4.02-8.97 8.98c0 4.94 4.02 8.98 8.97 8.98" />
  </svg>
);
export default SvgCirclebadgefillBold;
