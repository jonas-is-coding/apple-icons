import * as React from "react";
const SvgRectanglesplit2X1SlashBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M25.162 25.347c.39.38 1.02.38 1.39 0a.993.993 0 0 0 0-1.4L2.872.287c-.39-.38-1.02-.38-1.41 0-.37.38-.37 1.02 0 1.4Zm-1.33-23.73H6.422l3.02 3.02h3.1v3.11l2.89 2.87v-5.98h8.08c.93 0 1.44.46 1.44 1.45v13.06c0 .33-.08.57-.24.75l2.55 2.54c.46-.62.71-1.47.71-2.53V5.727c0-2.66-1.45-4.11-4.14-4.11m-19.69 22.4h17.47l-3.03-3.02h-3.15v-3.15l-2.89-2.88v6.03h-8.08c-.93 0-1.44-.46-1.44-1.45V6.477c0-.34.1-.59.25-.77l-2.53-2.53c-.5.63-.74 1.48-.74 2.55v14.18c0 2.66 1.46 4.11 4.14 4.11" />
  </svg>
);
export default SvgRectanglesplit2X1SlashBold;
