import * as React from "react";
const SvgMicrophonesquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.14-9.13c-1.19 0-2.2-.92-2.2-2.26v-4.84c0-1.32 1.01-2.24 2.2-2.24 1.2 0 2.19.93 2.19 2.25v4.83c0 1.34-.99 2.26-2.19 2.26m-2.98 5.17c-.46 0-.85-.36-.85-.81 0-.44.39-.83.85-.83h2.19v-.94c-2.44-.31-4.23-2.11-4.23-4.65v-1.44c0-.43.37-.8.82-.8s.83.37.83.8v1.43c0 1.83 1.48 3.19 3.37 3.19 1.9 0 3.37-1.36 3.37-3.19v-1.43c0-.43.37-.8.83-.8.44 0 .82.37.82.8v1.44c0 2.54-1.78 4.32-4.23 4.65v.94h2.2c.45 0 .83.39.83.83s-.38.81-.83.81Z" />
  </svg>
);
export default SvgMicrophonesquarefillBold;
