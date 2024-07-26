import * as React from "react";
const SvgArrowtriangledownBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M19.28 1.943c0-1.08-.82-1.94-2.19-1.94H2.19C.82.003 0 .863 0 1.933c0 .54.21 1 .54 1.65l7.01 14.45c.54 1.12 1.2 1.64 2.08 1.64.89 0 1.55-.52 2.1-1.64l7.01-14.45c.33-.65.54-1.1.54-1.64m-3.83 1.22c0 .05-.03.08-.05.14l-5.65 12.03c-.02.05-.06.09-.12.09-.04 0-.08-.04-.11-.09L3.87 3.293c-.03-.06-.05-.09-.05-.13 0-.07.05-.1.13-.1l11.37.01c.08 0 .13.03.13.09" />
  </svg>
);
export default SvgArrowtriangledownBold;
