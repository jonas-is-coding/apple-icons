import * as React from "react";
const SvgCableconnectorhorizontalBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 6.114h10.33v1.33c0 1.03.51 1.53 1.54 1.53h10.07c1.03 0 1.54-.5 1.54-1.53v-5.91c0-1.03-.51-1.53-1.54-1.53h-10.07c-1.03 0-1.54.5-1.54 1.53v1.4H.002Zm25.05 1.08h2.94c1.04 0 1.54-.51 1.54-1.55v-2.32c0-1.04-.5-1.54-1.54-1.54h-2.94Z" />
  </svg>
);
export default SvgCableconnectorhorizontalBold;
