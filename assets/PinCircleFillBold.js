import * as React from "react";
const SvgPincirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-4.81-10.21c0-1.28 1.14-2.54 2.79-3.15l.19-2.75c-.89-.5-1.54-1.03-1.84-1.4-.17-.21-.26-.45-.26-.66 0-.43.34-.74.79-.74h6.3c.46 0 .79.31.79.74 0 .2-.09.44-.26.66-.28.37-.96.9-1.84 1.4l.19 2.75c1.64.61 2.79 1.87 2.79 3.15 0 .58-.39.96-.97.96h-2.92v2.09c0 .99-.66 2.35-.93 2.35-.28 0-.93-1.36-.93-2.35v-2.09h-2.92c-.59 0-.97-.38-.97-.96" />
  </svg>
);
export default SvgPincirclefillBold;
