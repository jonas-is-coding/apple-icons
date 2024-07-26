import * as React from "react";
const SvgIpadlandscapeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.152 22.402h20.26c2.68 0 4.14-1.46 4.14-4.11V4.112c0-2.66-1.46-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.47 4.11 4.15 4.11m.32-3.02c-.94 0-1.44-.46-1.44-1.45V4.492c0-1 .5-1.47 1.43-1.47h19.62c.94 0 1.44.47 1.44 1.47v13.44c0 .99-.5 1.45-1.44 1.45Zm5.24-.98h9.12c.38 0 .63-.25.63-.64 0-.38-.25-.64-.63-.64h-9.12c-.36 0-.63.26-.63.64 0 .39.27.64.63.64" />
  </svg>
);
export default SvgIpadlandscapeBold;
