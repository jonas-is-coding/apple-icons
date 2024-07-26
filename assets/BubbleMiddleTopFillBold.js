import * as React from "react";
const SvgBubblemiddletopfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.192 0c-.93 0-1.53.51-2.19 1.53l-2.04 3.2h-3.22c-3.59 0-5.74 2.2-5.74 5.76v9.28c0 3.56 2.15 5.75 5.74 5.75h14.7c3.58 0 5.74-2.19 5.74-5.75v-9.28c0-3.56-2.16-5.76-5.74-5.76h-3.05l-2.02-3.18C14.712.5 14.132 0 13.192 0" />
  </svg>
);
export default SvgBubblemiddletopfillBold;
