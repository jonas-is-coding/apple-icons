import * as React from "react";
const SvgArrowupbackwardsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m3.31-7.69c-.74 0-1.21-.53-1.21-1.35v-5.61c0-1.06.61-1.61 1.63-1.61h5.63c.83 0 1.37.47 1.37 1.22 0 .73-.54 1.2-1.36 1.2h-1.78l-1.45-.19 1.66 1.47 3.93 3.91c.27.28.44.66.44 1.02 0 .84-.62 1.39-1.39 1.39-.4 0-.75-.14-1.07-.45l-3.89-3.89-1.47-1.65.18 1.52v1.67c0 .83-.47 1.35-1.22 1.35" />
  </svg>
);
export default SvgArrowupbackwardsquarefillBold;
