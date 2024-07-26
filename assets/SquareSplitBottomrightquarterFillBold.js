import * as React from "react";
const SvgSquaresplitbottomrightquarterfillBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404c-2.68 0-4.14-1.45-4.14-4.1V4.114c0-2.66 1.46-4.11 4.14-4.11h14.13c2.68 0 4.13 1.46 4.13 4.11v6.05h-8.46c-2.43 0-3.79 1.33-3.79 3.71v8.53h3.02v.01h-3.02v-.01Zm9.03-8.17c0-.68.39-1.05 1.11-1.05h8.12v5.12c0 2.65-1.45 4.1-4.13 4.1h-5.1Z" />
  </svg>
);
export default SvgSquaresplitbottomrightquarterfillBold;
