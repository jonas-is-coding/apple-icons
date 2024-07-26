import * as React from "react";
const SvgRectangleslashBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M25.162 25.347c.39.38 1.02.38 1.39 0a.993.993 0 0 0 0-1.4L2.872.287c-.39-.38-1.02-.38-1.41 0-.37.38-.37 1.02 0 1.4Zm-1.33-23.73H6.422l3.02 3.02h14.07c.93 0 1.44.46 1.44 1.45v13.13c0 .3-.08.53-.24.68l2.55 2.54c.46-.62.71-1.47.71-2.53V5.727c0-2.66-1.45-4.11-4.14-4.11m-19.69 22.4h17.47l-3.03-3.02H4.462c-.93 0-1.44-.46-1.44-1.45V6.407c0-.3.1-.55.25-.7l-2.53-2.53c-.5.62-.74 1.48-.74 2.55v14.18c0 2.66 1.46 4.11 4.14 4.11" />
  </svg>
);
export default SvgRectangleslashBold;
