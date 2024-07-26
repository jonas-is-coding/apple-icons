import * as React from "react";
const SvgWaveformpathecgBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.2 14.505h5.22c.69 0 1.15-.33 1.29-.97l1.37-6.32 2.78 16.75c.2 1.22 2.06 1.22 2.3.02l2.62-12.43.35 1.87c.14.71.59 1.08 1.32 1.08h4.58c.67 0 1.21-.53 1.21-1.18 0-.69-.52-1.2-1.21-1.2h-3.92l-1.26-5.7c-.26-1.17-2.03-1.16-2.29.04l-2.54 11.41L10.24.905c-.18-1.19-1.93-1.22-2.2-.01l-2.43 11.23H1.2c-.67 0-1.2.54-1.2 1.2 0 .65.53 1.18 1.2 1.18" />
  </svg>
);
export default SvgWaveformpathecgBold;
