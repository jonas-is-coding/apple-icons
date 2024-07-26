import * as React from "react";
const SvgChevronupsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m1.11-8.25c-.46-.43-.45-1.22.03-1.72l4.53-4.85c.85-.9 2.09-.9 2.94-.01l4.53 4.85c.48.51.5 1.3.04 1.73-.52.52-1.3.52-1.77.01l-4.27-4.55-4.26 4.55c-.47.51-1.26.51-1.77-.01" />
  </svg>
);
export default SvgChevronupsquarefillBold;
