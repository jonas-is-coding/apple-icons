import * as React from "react";
const SvgCableconnectorBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.712 4.215h4.85v-2.68c0-1.03-.5-1.53-1.55-1.53h-1.75c-1.05 0-1.55.5-1.55 1.53Zm-.18 13.89h1.39v9.9h2.45v-9.9h1.37c1.03 0 1.53-.5 1.53-1.53v-9.23c0-1.04-.5-1.56-1.53-1.56h-5.21c-1.03 0-1.53.52-1.53 1.56v9.23c0 1.03.5 1.53 1.53 1.53" />
  </svg>
);
export default SvgCableconnectorBold;
