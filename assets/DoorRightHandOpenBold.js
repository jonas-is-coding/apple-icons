import * as React from "react";
const SvgDoorrighthandopenBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M19.792 24.153V3.313c0-2.04-1.28-3.31-3.34-3.31h-13.1c-2.07 0-3.35 1.27-3.35 3.31v20.84c0 .83.68 1.51 1.51 1.51s1.51-.68 1.51-1.51V3.693c0-.4.26-.66.66-.66h12.43c.4 0 .66.26.66.66v20.46c0 .83.68 1.51 1.51 1.51s1.51-.68 1.51-1.51m-4.45.5V4.793c0-.3-.24-.46-.55-.32l-3.58 1.52c-.29.12-.43.26-.43.55v16.37c0 .28.14.42.44.55l3.57 1.51c.31.13.55-.01.55-.32" />
  </svg>
);
export default SvgDoorrighthandopenBold;
