import * as React from "react";
const SvgPoweroutlettypeesquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.06-4.54a6.65 6.65 0 0 1-6.65-6.66c0-3.69 2.97-6.66 6.65-6.66s6.66 2.97 6.66 6.66c0 3.68-2.98 6.66-6.66 6.66m0-9.06c.56 0 1.04-.47 1.04-1.03 0-.57-.48-1.05-1.04-1.05-.57 0-1.04.48-1.04 1.05 0 .56.47 1.03 1.04 1.03m3.25 3.85c.83 0 1.51-.69 1.51-1.52 0-.85-.69-1.52-1.51-1.52-.85 0-1.54.69-1.54 1.52s.69 1.52 1.54 1.52m-6.49.01c.83 0 1.52-.69 1.52-1.52s-.69-1.52-1.52-1.52c-.84 0-1.53.68-1.53 1.52s.69 1.52 1.53 1.52" />
  </svg>
);
export default SvgPoweroutlettypeesquarefillBold;
