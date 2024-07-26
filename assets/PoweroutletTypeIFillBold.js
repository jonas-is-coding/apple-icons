import * as React from "react";
const SvgPoweroutlettypeifillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h14.94c2.67 0 4.13-1.45 4.13-4.11V4.112c0-2.66-1.46-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m12.98-11.63c-.4.42-.94.41-1.35 0l-2.6-2.58c-.39-.39-.39-.95.01-1.36l.67-.66c.4-.4.96-.41 1.35 0l2.58 2.59c.41.41.41.94.01 1.35Zm-11.7-.66c-.39-.41-.39-.95 0-1.35l2.59-2.59c.4-.41.95-.4 1.35 0l.67.66c.4.41.4.97.01 1.36l-2.6 2.59c-.41.4-.95.41-1.35 0Zm5.72 7.21c-.56 0-.95-.38-.95-.95v-3.4c0-.56.39-.96.95-.96h.94c.56 0 .96.4.96.96v3.4c0 .57-.4.95-.96.95Z" />
  </svg>
);
export default SvgPoweroutlettypeifillBold;
