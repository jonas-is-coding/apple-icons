import * as React from "react";
const SvgTvBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.622 20.89h23.19c2.26 0 3.62-1.36 3.62-3.62V3.62c0-2.26-1.36-3.62-3.62-3.62H3.622C1.362 0 .002 1.36.002 3.62v13.65c0 2.26 1.36 3.62 3.62 3.62m.3-2.87c-.68 0-1.05-.35-1.05-1.05V3.93c0-.71.37-1.06 1.05-1.06h22.59c.66 0 1.04.35 1.04 1.06v13.04c0 .7-.38 1.05-1.04 1.05Zm5.13 7.2h12.34c.7 0 1.26-.6 1.26-1.27s-.56-1.26-1.26-1.26H9.052c-.71 0-1.28.59-1.28 1.26s.57 1.27 1.28 1.27" />
  </svg>
);
export default SvgTvBold;
