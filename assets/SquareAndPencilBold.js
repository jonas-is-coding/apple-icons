import * as React from "react";
const SvgSquareandpencilBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m22.618 3.31.77-.79c.55-.55.59-1.34.05-1.86l-.38-.36c-.46-.46-1.27-.38-1.79.15l-.76.75ZM8.858 15.54l2.56-1.03 10.26-10.25-2.12-2.11-10.24 10.26-1.07 2.51c-.15.39.26.75.61.62m-4.72 8.24h13.47c2.49 0 3.95-1.45 3.95-4.11V7.06l-3.02 3.02v9.21c0 1.01-.5 1.47-1.25 1.47H4.478c-.95 0-1.45-.46-1.45-1.47V6.71c0-1 .5-1.47 1.45-1.47h9.29l3.02-3.02H4.138c-2.67 0-4.14 1.45-4.14 4.11v13.34c0 2.66 1.47 4.11 4.14 4.11" />
  </svg>
);
export default SvgSquareandpencilBold;
