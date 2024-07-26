import * as React from "react";
const SvgTvfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.622 20.88h23.19c2.33 0 3.62-1.25 3.62-3.62V3.62c0-2.35-1.29-3.62-3.62-3.62H3.622C1.292 0 .002 1.27.002 3.62v13.64c0 2.37 1.29 3.62 3.62 3.62m5.43 4.33h12.34c.7 0 1.26-.59 1.26-1.26 0-.68-.56-1.26-1.26-1.26H9.052c-.71 0-1.28.58-1.28 1.26 0 .67.57 1.26 1.28 1.26" />
  </svg>
);
export default SvgTvfillBold;
