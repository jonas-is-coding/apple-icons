import * as React from "react";
const SvgLocationnorthlinefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.61 7.508c.81 0 1.36-.55 1.36-1.39v-4.73c0-.85-.55-1.39-1.36-1.39-.8 0-1.34.54-1.34 1.39v4.73c0 .84.54 1.39 1.34 1.39m-6.66 22.33c.71 0 1.46-.41 2.11-1.06l4.26-4.16c.12-.11.2-.16.29-.16.11 0 .19.05.3.16l4.27 4.16c.65.65 1.4 1.06 2.11 1.06 1.12 0 1.95-.88 1.95-2.03 0-.61-.2-1.28-.54-2.08l-5.71-14.11c-.58-1.41-1.26-2.21-2.38-2.21-1.11 0-1.77.78-2.36 2.21L.53 25.728c-.33.8-.53 1.47-.53 2.08 0 1.15.83 2.03 1.95 2.03" />
  </svg>
);
export default SvgLocationnorthlinefillBold;
