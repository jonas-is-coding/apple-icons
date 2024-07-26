import * as React from "react";
const SvgIcloudandarrowdownfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 14.37c0 3.33 2.58 6.01 6.57 6.01h7.3v2.41l.12 1.71-.62-.9-1.41-1.44c-.23-.25-.55-.39-.89-.39-.62 0-1.17.46-1.17 1.13 0 .35.13.6.36.83l3.89 3.67c.37.34.71.47 1.07.47s.72-.13 1.08-.47l3.89-3.67c.23-.23.36-.48.36-.83 0-.67-.56-1.13-1.18-1.13-.33 0-.65.14-.88.39l-1.42 1.44-.61.9.12-1.71v-2.41h-2.71v-7.61c0-.71.6-1.33 1.35-1.33.76 0 1.36.62 1.36 1.33v7.61h7.95c3.77 0 6.17-2.19 6.17-5.37 0-2.67-1.42-4.78-3.8-5.69-.01-5.42-3.92-9.32-9.02-9.32-3.03 0-5.48 1.48-7.07 3.71-2.98-.65-6.21 1.54-6.41 4.88-2.73.54-4.4 2.87-4.4 5.78" />
  </svg>
);
export default SvgIcloudandarrowdownfillBold;
