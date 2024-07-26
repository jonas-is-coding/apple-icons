import * as React from "react";
const SvgShieldlefthalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 14.195c0 4.26 2.44 6.11 9.29 9.7.31.15.65.26.89.26s.58-.11.88-.26c6.87-3.57 9.29-5.44 9.29-9.7v-8.68c0-1.67-.56-2.35-2.01-2.97-1.16-.49-5.43-1.92-6.52-2.28-.5-.16-1.13-.27-1.64-.27s-1.13.13-1.65.27c-1.09.31-5.36 1.8-6.52 2.28-1.45.62-2.01 1.3-2.01 2.97Zm10.3 6.86V2.785c.21.02.4.06.74.18 1.22.46 4.4 1.56 6.08 2.18.33.13.43.32.43.76v7.84c0 3.18-1.7 4.07-6.78 7.1-.24.13-.35.19-.47.21" />
  </svg>
);
export default SvgShieldlefthalffilledBold;
