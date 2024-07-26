import * as React from "react";
const SvgArrowtriangledownfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M19 1.943c0-1.08-.82-1.94-2.18-1.94H2.19C.82.003 0 .863 0 1.933c0 .54.21 1 .54 1.65l6.87 14.32c.54 1.12 1.2 1.63 2.09 1.63.88 0 1.55-.51 2.09-1.63l6.88-14.32c.32-.65.53-1.1.53-1.64" />
  </svg>
);
export default SvgArrowtriangledownfillBold;
