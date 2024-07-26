import * as React from "react";
const SvgEarbudscaseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.742 19.888h13.94c5.27 0 7.74-2.44 7.74-7.64v-4.58c0-5.22-2.46-7.67-7.68-7.67H7.672c-5.21 0-7.67 2.45-7.67 7.67v4.58c0 5.2 2.47 7.64 7.74 7.64m-.12-16.87h14.19c3.03 0 4.47 1.31 4.58 4.2H3.032c.11-2.89 1.55-4.2 4.59-4.2m.07 13.84c-3.22 0-4.67-1.4-4.67-4.54v-3.76h23.38v3.76c0 3.14-1.45 4.54-4.66 4.54Zm7.02-3.92c.69-.01 1.24-.56 1.24-1.23 0-.68-.55-1.23-1.24-1.23-.67 0-1.24.55-1.24 1.23 0 .67.57 1.23 1.24 1.23" />
  </svg>
);
export default SvgEarbudscaseBold;
