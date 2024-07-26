import * as React from "react";
const SvgFibrechannelBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 1.514c0 .83.68 1.51 1.51 1.51h27.07c.83 0 1.51-.68 1.51-1.51s-.68-1.51-1.51-1.51H1.512c-.83 0-1.51.68-1.51 1.51m4.36 11.56h15.54v3.43c0 1.26 1.57 1.88 2.48.96l4.48-4.57c1.03-1.05.49-2.75-1.1-2.75h-15.54v-3.41c0-1.26-1.57-1.88-2.49-.96l-4.47 4.57c-1.04 1.05-.51 2.73 1.1 2.73m-4.36 8.68c0 .82.68 1.51 1.51 1.51h27.07c.83 0 1.51-.69 1.51-1.51 0-.84-.68-1.52-1.51-1.52H1.512c-.83 0-1.51.68-1.51 1.52" />
  </svg>
);
export default SvgFibrechannelBold;
