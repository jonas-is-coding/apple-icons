import * as React from "react";
const SvgCloudmooncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m7.9-13.72c0 1.02-1.14 2.54-2.99 2.85-.21-1.76-1.57-3.08-3.37-3.31-.14-.2-.3-.39-.46-.57.21-1.73 1.75-3.01 2.81-3.04.24 0 .38.11.38.3 0 .33-.38.89-.38 1.68 0 1.24.85 2.04 2.19 2.04.8 0 1.24-.34 1.53-.34.2 0 .29.16.29.39m-13.11 6.27c-1.47 0-2.45-.93-2.45-2.29 0-1.05.64-1.89 1.6-2.21.2-1.87 1.8-3.32 3.73-3.32 1.59 0 2.71.85 3.32 1.98 1.74.02 3.03 1.27 3.03 2.95 0 1.64-1.25 2.89-2.9 2.89Z" />
  </svg>
);
export default SvgCloudmooncirclefillBold;
