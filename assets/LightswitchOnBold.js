import * as React from "react";
const SvgLightswitchonBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.112 26.223h10.44c2.66 0 4.12-1.46 4.12-4.13V4.133c0-2.68-1.46-4.13-4.12-4.13H4.112c-2.66 0-4.11 1.45-4.11 4.13v17.96c0 2.67 1.45 4.13 4.11 4.13m.36-3.02c-.99 0-1.45-.5-1.45-1.44v-17.3c0-.95.46-1.44 1.45-1.44h9.71c.99 0 1.46.49 1.46 1.44v17.3c0 .94-.47 1.44-1.46 1.44Zm1.19-11.89h7.31c.54 0 .75-.23.75-.75v-4.9c0-.52-.21-.74-.75-.74h-7.31c-.53 0-.75.22-.75.74v4.9c0 .52.22.75.75.75" />
  </svg>
);
export default SvgLightswitchonBold;
