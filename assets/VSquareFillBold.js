import * as React from "react";
const SvgVsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.11-5.48c-1.33 0-1.98-.54-2.4-1.8l-2.64-7.42c-.11-.31-.14-.52-.14-.78 0-.89.63-1.46 1.57-1.46.87 0 1.3.4 1.55 1.38l2.02 7.04h.11l2.04-7.04c.23-.98.67-1.38 1.53-1.38.94 0 1.58.57 1.58 1.44 0 .26-.03.48-.14.8l-2.62 7.35c-.42 1.28-1.13 1.87-2.46 1.87" />
  </svg>
);
export default SvgVsquarefillBold;
