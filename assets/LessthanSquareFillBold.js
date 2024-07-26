import * as React from "react";
const SvgLessthansquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m10.25-6.12c-.31 0-.55-.05-.82-.19l-7.04-3.51c-.64-.31-.97-.71-.97-1.35 0-.63.32-1.06.97-1.39l7.04-3.59c.27-.13.51-.18.84-.18.81 0 1.4.58 1.4 1.4 0 .67-.32 1.09-1.14 1.42l-4.91 2.25v.11l4.91 2.21c.82.32 1.14.73 1.14 1.41 0 .83-.59 1.41-1.42 1.41" />
  </svg>
);
export default SvgLessthansquarefillBold;
