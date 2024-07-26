import * as React from "react";
const SvgShieldlefthalffilledslashBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M22.113 23.48c.39.39 1.02.39 1.39 0a.98.98 0 0 0 0-1.39L1.683.29c-.37-.39-1-.39-1.4 0a.99.99 0 0 0 0 1.39Zm-.46-5.5c.67-1.07.96-2.26.96-3.73V5.57c0-1.67-.56-2.35-2.01-2.97-1.16-.49-5.43-1.92-6.52-2.28-.5-.16-1.13-.27-1.64-.27s-1.13.13-1.65.27c-.83.24-3.28 1.08-5.07 1.73l6.72 6.72V2.83c.24 0 .46.06.86.19 1.22.46 4.42 1.56 6.08 2.18.34.13.43.32.43.76v7.84c0 .79-.1 1.42-.37 1.98ZM2.263 5.86v8.39c0 4.26 2.44 6.11 9.29 9.7.31.15.65.26.89.26s.58-.11.88-.26c1.79-.95 3.28-1.76 4.5-2.53l-2.13-2.13c-.76.46-1.64.99-2.66 1.61-.32.19-.45.24-.59.24v-5.09Z" />
  </svg>
);
export default SvgShieldlefthalffilledslashBold;
