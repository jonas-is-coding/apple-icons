import * as React from "react";
const SvgDoorlefthandopenBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 24.153c0 .83.68 1.51 1.51 1.51s1.51-.68 1.51-1.51V3.693c0-.4.26-.66.66-.66h12.43c.4 0 .66.26.66.66v20.46c0 .83.68 1.51 1.51 1.51s1.51-.68 1.51-1.51V3.313c0-2.04-1.28-3.31-3.34-3.31h-13.1c-2.07 0-3.35 1.27-3.35 3.31Zm4.45.5c0 .31.24.45.56.32l3.55-1.51c.32-.13.45-.27.45-.55V6.543c0-.29-.14-.43-.43-.55l-3.57-1.52c-.32-.14-.56.02-.56.32Z" />
  </svg>
);
export default SvgDoorlefthandopenBold;
