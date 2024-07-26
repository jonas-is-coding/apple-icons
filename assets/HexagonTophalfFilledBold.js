import * as React from "react";
const SvgHexagontophalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m1.622 21.812 9.09 5.26c1.03.6 2.21.6 3.25 0l9.09-5.26a3.18 3.18 0 0 0 1.62-2.8V8.502c0-1.17-.61-2.22-1.62-2.79l-9.09-5.26c-1.04-.6-2.22-.6-3.25 0l-9.09 5.26a3.17 3.17 0 0 0-1.62 2.79v10.51c0 1.18.61 2.23 1.62 2.8m1.33-8.05h18.75v4.7c0 .44-.22.83-.61 1.05l-8.14 4.73c-.39.22-.85.22-1.23 0l-8.15-4.73c-.38-.22-.62-.61-.62-1.05Z" />
  </svg>
);
export default SvgHexagontophalffilledBold;
