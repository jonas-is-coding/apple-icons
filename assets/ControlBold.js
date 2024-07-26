import * as React from "react";
const SvgControlBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.532 9.559c-.36.38-.53.8-.53 1.3 0 1.05.83 1.89 1.86 1.89.52 0 1-.22 1.38-.61l7.5-7.72 7.49 7.72c.39.4.87.61 1.37.61 1.04 0 1.87-.84 1.87-1.89 0-.51-.18-.93-.53-1.3l-8.67-8.86c-.46-.46-.95-.69-1.54-.7-.57 0-1.05.22-1.53.7Z" />
  </svg>
);
export default SvgControlBold;
