import * as React from "react";
const SvgPlaylaptopcomputerBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 18.767c0 .97.81 1.76 1.77 1.76h32.21c.96 0 1.77-.79 1.77-1.76 0-.98-.81-1.77-1.77-1.77h-2.33V3.327c0-2.13-1.21-3.33-3.34-3.33H7.442c-2.09 0-3.34 1.2-3.34 3.33v13.67h-2.33c-.96 0-1.77.79-1.77 1.77m7.12-1.77V4.067c0-.72.35-1.04 1.05-1.04h19.41c.7 0 1.05.32 1.05 1.04v12.93Zm7.85-3.39c0 .49.53.71.97.47l5.95-3.47c.42-.25.41-.81 0-1.04l-5.95-3.48c-.44-.26-.97-.03-.97.48Z" />
  </svg>
);
export default SvgPlaylaptopcomputerBold;
