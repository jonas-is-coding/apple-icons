import * as React from "react";
const SvgChevronup2Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.532 9.563c-.36.36-.53.79-.53 1.29 0 1.04.83 1.89 1.86 1.89.52 0 1-.23 1.38-.6l7.5-7.74 7.49 7.74c.39.38.87.6 1.37.6 1.04 0 1.87-.85 1.87-1.89 0-.52-.18-.94-.53-1.29l-8.67-8.87c-.47-.47-.95-.69-1.54-.69-.57 0-1.05.21-1.53.69Zm0 10.46c-.36.37-.53.79-.53 1.31 0 1.04.83 1.88 1.86 1.88.52 0 1-.22 1.38-.61l7.5-7.72 7.49 7.72c.39.4.87.61 1.37.61 1.04 0 1.87-.84 1.87-1.88 0-.52-.18-.94-.53-1.31l-8.67-8.85c-.46-.47-.95-.7-1.54-.71-.57 0-1.05.22-1.53.71Z" />
  </svg>
);
export default SvgChevronup2Bold;
