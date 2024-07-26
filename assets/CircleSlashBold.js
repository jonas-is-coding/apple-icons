import * as React from "react";
const SvgCircleslashBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M22.712 19.126c1.29-1.95 2.04-4.27 2.04-6.75 0-6.79-5.59-12.38-12.38-12.38-2.48 0-4.8.75-6.75 2.04l2.24 2.23a9.1 9.1 0 0 1 4.5-1.18c5.16 0 9.31 4.14 9.31 9.29 0 1.65-.44 3.19-1.19 4.51Zm.03 5.03c.39.37 1.02.37 1.4-.02.37-.38.39-1 0-1.39L2.002.626a.975.975 0 0 0-1.4 0c-.38.36-.38 1.01 0 1.38Zm-5.87-3.66a9.1 9.1 0 0 1-4.5 1.18c-5.15 0-9.29-4.14-9.29-9.3 0-1.64.43-3.19 1.2-4.51l-2.24-2.24a12.15 12.15 0 0 0-2.04 6.75c0 6.8 5.59 12.39 12.37 12.39 2.49 0 4.8-.75 6.74-2.03Z" />
  </svg>
);
export default SvgCircleslashBold;
