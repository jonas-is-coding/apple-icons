import * as React from "react";
const SvgChevronforward2Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.892 21.465c.5 0 .92-.17 1.28-.52l8.88-8.68c.48-.48.69-.96.69-1.53 0-.59-.23-1.08-.69-1.54L3.172.525c-.35-.35-.77-.53-1.28-.53-1.05 0-1.89.84-1.89 1.87 0 .5.21.98.6 1.37l7.73 7.49-7.73 7.5c-.38.38-.6.86-.6 1.38 0 1.03.84 1.86 1.89 1.86m10.46 0c.52 0 .94-.17 1.3-.52l8.87-8.68c.47-.48.69-.96.69-1.53-.01-.59-.22-1.08-.7-1.54l-8.86-8.67a1.78 1.78 0 0 0-1.3-.53c-1.04 0-1.89.84-1.89 1.87 0 .5.21.98.61 1.37l7.73 7.49-7.73 7.5c-.38.38-.61.86-.61 1.38 0 1.03.85 1.86 1.89 1.86" />
  </svg>
);
export default SvgChevronforward2Bold;
