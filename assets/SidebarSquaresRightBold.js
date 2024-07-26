import * as React from "react";
const SvgSidebarsquaresrightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.492c0-1 .51-1.47 1.44-1.47h10.71v16.36Zm19.05-16.36c.93 0 1.44.47 1.44 1.47v13.44c0 .99-.51 1.45-1.44 1.45h-5.55V3.022Zm-1.12 5.23c.45 0 .69-.25.69-.67v-1.85c0-.45-.24-.68-.69-.68h-1.9c-.43 0-.68.23-.68.68v1.85c0 .42.26.67.68.67Zm0 4.54c.45 0 .69-.24.69-.66v-1.87c0-.42-.24-.66-.69-.66h-1.9c-.43 0-.68.24-.68.66v1.87c0 .42.26.66.68.66Zm0 4.55c.45 0 .69-.23.69-.67v-1.85c0-.43-.24-.68-.69-.68h-1.9c-.43 0-.68.25-.68.68v1.85c0 .44.26.67.68.67Z" />
  </svg>
);
export default SvgSidebarsquaresrightBold;
