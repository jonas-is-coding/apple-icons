import * as React from "react";
const SvgDistributeverticalbottomfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.872 9.55h10.37c1.95 0 3.13-1.16 3.13-3.08V3.08c0-1.92-1.18-3.08-3.13-3.08H9.872c-1.95 0-3.13 1.16-3.13 3.08v3.39c0 1.92 1.18 3.08 3.13 3.08m-8.48 4.69h27.34c.76 0 1.39-.65 1.39-1.42 0-.76-.63-1.41-1.39-1.41H1.392c-.77 0-1.39.65-1.39 1.41 0 .77.62 1.42 1.39 1.42m4.51 12.57h18.31c1.94 0 3.13-1.17 3.13-3.08v-3.39c0-1.92-1.19-3.09-3.13-3.09H5.902c-1.94 0-3.12 1.17-3.12 3.09v3.39c0 1.91 1.18 3.08 3.12 3.08m-4.51 4.69h27.34c.76 0 1.39-.65 1.39-1.42 0-.76-.63-1.42-1.39-1.42H1.392c-.77 0-1.39.66-1.39 1.42 0 .77.62 1.42 1.39 1.42" />
  </svg>
);
export default SvgDistributeverticalbottomfillBold;
