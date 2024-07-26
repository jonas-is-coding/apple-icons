import * as React from "react";
const SvgArrowshapedownBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.172 25.888c.52 0 1.09-.21 1.54-.69l8.65-9.34c.7-.76.97-1.28.97-2 0-1.1-.85-1.92-1.94-1.92h-3.81v-8.49c0-2.17-1.25-3.45-3.41-3.45h-4.07c-2.15 0-3.41 1.28-3.41 3.45v8.49h-3.78c-1.09 0-1.91.82-1.91 1.91 0 .74.29 1.32.94 2.01l8.69 9.34c.43.47 1.04.69 1.54.69m0-3.39c-.06 0-.12-.02-.21-.12l-7.07-7.48a.28.28 0 0 1-.09-.19c0-.11.09-.19.21-.19h3.99c.26 0 .38-.12.38-.37V3.728c0-.68.34-1.04 1.04-1.04h3.45c.7 0 1.03.36 1.03 1.04v10.42c0 .25.11.37.38.37h4.09c.13 0 .2.08.2.19 0 .07-.02.13-.07.19l-7.12 7.48c-.08.1-.14.12-.21.12" />
  </svg>
);
export default SvgArrowshapedownBold;
