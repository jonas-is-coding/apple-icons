import * as React from "react";
const SvgButtonverticalrightpressfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.932 7.23v14.98c0 4.32 2.59 7.22 6.61 7.22 4.03 0 6.62-2.9 6.62-7.22v-2.07l-3.74-3.29c-1.32-1.18-1.32-3.13 0-4.3l3.74-3.27V7.23c0-4.32-2.59-7.23-6.62-7.23-4.02 0-6.61 2.91-6.61 7.23m-4.93 0v14.98c0 4.17 2.13 6.9 6.24 7.19-1.93-1.59-3.08-4.13-3.08-7.19V7.23c0-3.07 1.15-5.6 3.08-7.19-4.11.3-6.24 3.02-6.24 7.19m15.6 8.3 3.96 3.49c.82.73 1.95.29 1.95-.87V16.1h5.95c.83 0 1.38-.61 1.38-1.38 0-.79-.55-1.4-1.38-1.4h-5.95v-2.08c0-1.09-1.12-1.57-1.95-.85l-3.96 3.49c-.54.48-.54 1.18 0 1.65" />
  </svg>
);
export default SvgButtonverticalrightpressfillBold;
