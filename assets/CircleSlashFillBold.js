import * as React from "react";
const SvgCircleslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M22.712 19.136c1.29-1.94 2.04-4.28 2.04-6.76 0-6.79-5.59-12.38-12.38-12.38-2.48 0-4.8.75-6.74 2.03Zm.03 5c.39.38 1.02.38 1.4-.01.37-.38.39-1 0-1.38L2.002.606c-.39-.38-1.02-.38-1.4 0s-.38 1.02 0 1.4ZM2.032 5.646a12.12 12.12 0 0 0-2.03 6.73c0 6.8 5.59 12.39 12.37 12.39 2.49 0 4.8-.75 6.74-2.03Z" />
  </svg>
);
export default SvgCircleslashfillBold;
