import * as React from "react";
const SvgChevronupBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.532 9.562c-.36.35-.53.79-.53 1.29 0 1.04.83 1.89 1.86 1.89.52 0 1-.22 1.38-.6l7.5-7.72 7.49 7.72c.38.4.87.6 1.37.6 1.04 0 1.87-.85 1.87-1.89 0-.52-.18-.94-.53-1.29l-8.67-8.87c-.46-.47-.95-.69-1.54-.69-.57 0-1.05.21-1.53.69Z" />
  </svg>
);
export default SvgChevronupBold;
