import * as React from "react";
const SvgChevrondownBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.732 12.74c.59 0 1.08-.23 1.54-.69l8.67-8.88c.35-.35.53-.77.53-1.28 0-1.05-.83-1.89-1.87-1.89-.5 0-.98.21-1.37.6l-7.49 7.73L3.242.6c-.38-.39-.86-.6-1.38-.6C.832 0 .002.84.002 1.89c0 .5.17.92.53 1.28l8.67 8.88c.48.48.96.69 1.53.69" />
  </svg>
);
export default SvgChevrondownBold;
