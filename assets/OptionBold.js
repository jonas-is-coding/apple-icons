import * as React from "react";
const SvgOptionBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.152-.001h-5.44c-.96 0-1.71.73-1.71 1.65 0 .94.74 1.67 1.71 1.67h4.7c.31 0 .55.14.68.42l7.5 15.98c.61 1.27 1.44 1.81 2.78 1.81h5.48c.95 0 1.71-.73 1.71-1.65 0-.94-.75-1.67-1.71-1.67h-4.72q-.51 0-.72-.42l-7.47-15.97c-.55-1.16-1.55-1.82-2.79-1.82m15.7 0h-7.07c-.96 0-1.7.72-1.7 1.65 0 .94.73 1.66 1.7 1.66h7.07c.97 0 1.7-.72 1.7-1.66 0-.93-.73-1.65-1.7-1.65" />
  </svg>
);
export default SvgOptionBold;
