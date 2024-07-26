import * as React from "react";
const SvgLightswitchoffBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.112.003c-2.66 0-4.11 1.46-4.11 4.13v17.96c0 2.67 1.45 4.13 4.11 4.13h10.44c2.66 0 4.12-1.46 4.12-4.13V4.133c0-2.67-1.46-4.13-4.12-4.13Zm.36 3.02h9.71c.99 0 1.46.49 1.46 1.44v17.3c0 .94-.47 1.44-1.46 1.44h-9.71c-.99 0-1.45-.5-1.45-1.44v-17.3c0-.95.46-1.44 1.45-1.44m1.19 11.9c-.53 0-.75.21-.75.73v4.9c0 .53.22.74.75.74h7.31c.54 0 .75-.21.75-.74v-4.9c0-.52-.21-.73-.75-.73Z" />
  </svg>
);
export default SvgLightswitchoffBold;
