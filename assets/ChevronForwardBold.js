import * as React from "react";
const SvgChevronforwardBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.731 10.735c0-.59-.22-1.07-.7-1.52L3.171.525c-.35-.35-.78-.53-1.3-.53-1.03 0-1.87.85-1.87 1.87 0 .51.21.99.6 1.37l7.72 7.49-7.72 7.5c-.39.38-.6.85-.6 1.38 0 1.03.84 1.86 1.87 1.86.52 0 .95-.17 1.3-.52l8.86-8.69c.5-.47.7-.95.7-1.52" />
  </svg>
);
export default SvgChevronforwardBold;
