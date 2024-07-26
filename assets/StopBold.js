import * as React from "react";
const SvgStopBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 17.107c0 1.88 1.17 3.03 3.13 3.03h13.87c1.97 0 3.14-1.15 3.14-3.03V3.027c0-1.87-1.17-3.03-3.14-3.03H3.132c-1.96 0-3.13 1.16-3.13 3.03Zm3.02-1.03V4.057c0-.68.4-1.08 1.08-1.08h12.05c.66 0 1.06.4 1.06 1.08v12.02c0 .69-.4 1.09-1.06 1.09H4.102c-.68 0-1.08-.4-1.08-1.09" />
  </svg>
);
export default SvgStopBold;
