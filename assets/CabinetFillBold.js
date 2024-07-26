import * as React from "react";
const SvgCabinetfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.152 28.457c.81 0 1.43-.61 1.43-1.43v-1.22h3.79V-.003h-6.15c-1.91 0-3.22 1.35-3.22 3.31v19.19c0 1.78 1.09 3.06 2.72 3.27v1.26c0 .82.62 1.43 1.43 1.43m12.24 0c.82 0 1.43-.61 1.43-1.43v-1.25c1.65-.21 2.76-1.48 2.76-3.28V3.307c0-1.96-1.33-3.31-3.24-3.31h-6.14v25.81h3.77v1.22c0 .82.61 1.43 1.42 1.43m-10.25-13.43c-.83 0-1.48-.67-1.48-1.46 0-.81.65-1.47 1.48-1.47.8 0 1.46.64 1.46 1.47 0 .8-.66 1.46-1.46 1.46m8.3 0a1.466 1.466 0 1 1 0-2.93c.8 0 1.47.64 1.47 1.47 0 .8-.67 1.46-1.47 1.46" />
  </svg>
);
export default SvgCabinetfillBold;
