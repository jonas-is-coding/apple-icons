import * as React from "react";
const SvgBookclosedBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.102 25.78h15.36c.78 0 1.34-.56 1.34-1.33 0-.73-.48-1.14-1.04-1.46-1.37-.72-1.64-2.85-.14-4.15.8-.64 1.16-1.23 1.16-2.45V4.14c0-2.68-1.46-4.14-4.12-4.14H4.112C1.452 0 .002 1.45.002 4.14v17.53c0 2.66 1.45 4.11 4.1 4.11m12.2-22.76c1 0 1.45.51 1.45 1.44v11.43c0 .46-.26.7-.72.7H6.262V3.02ZM3.022 16.9V4.46c0-.91.44-1.4 1.36-1.44v13.57c-.5.03-.96.13-1.36.31m1.7 6.2c-1.35 0-2.01-.82-2.01-1.92 0-1.06.73-1.9 2.07-1.9h11.19c.11 0 .21-.01.31-.03-.61 1.27-.58 2.7.03 3.85Z" />
  </svg>
);
export default SvgBookclosedBold;
