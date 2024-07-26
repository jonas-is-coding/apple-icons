import * as React from "react";
const SvgMicrophonecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m.01-10.3c-1.19 0-2.2-.92-2.2-2.26v-4.84c0-1.32 1.01-2.24 2.2-2.24 1.2 0 2.2.93 2.2 2.25v4.83c0 1.34-1 2.26-2.2 2.26m-2.98 5.17c-.46 0-.85-.36-.85-.81 0-.44.39-.83.85-.83h2.19v-.94c-2.45-.31-4.23-2.11-4.23-4.65v-1.44c0-.43.37-.8.82-.8s.83.37.83.8v1.43c0 1.83 1.48 3.19 3.36 3.19 1.9 0 3.38-1.36 3.38-3.19v-1.43c0-.43.37-.8.83-.8.45 0 .82.37.82.8v1.44c0 2.54-1.78 4.32-4.23 4.65v.94h2.19c.46 0 .84.39.84.83s-.39.81-.84.81Z" />
  </svg>
);
export default SvgMicrophonecirclefillBold;
