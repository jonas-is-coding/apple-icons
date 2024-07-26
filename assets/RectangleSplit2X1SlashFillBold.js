import * as React from "react";
const SvgRectanglesplit2X1SlashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M25.162 25.347c.39.38 1.02.38 1.39 0a.993.993 0 0 0 0-1.4L2.872.287c-.39-.38-1.02-.38-1.41 0-.37.38-.37 1.02 0 1.4Zm-12.62-23.73h-6.12l6.12 6.13Zm15.43 18.29V5.727c0-2.66-1.45-4.11-4.14-4.11h-8.4v9l11.83 11.82c.46-.62.71-1.47.71-2.53M.002 5.727v14.18c0 2.66 1.46 4.11 4.14 4.11h8.4v-9.05L.742 3.177c-.5.62-.74 1.48-.74 2.55m15.43 12.12v6.17h6.18Z" />
  </svg>
);
export default SvgRectanglesplit2X1SlashfillBold;
