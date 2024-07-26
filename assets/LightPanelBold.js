import * as React from "react";
const SvgLightpanelBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.878h21.16c2.68 0 4.15-1.46 4.15-4.12V4.108c0-2.66-1.47-4.11-4.15-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.65c0 2.66 1.46 4.12 4.14 4.12m.32-3.03c-.93 0-1.44-.45-1.44-1.46V4.478c0-1 .51-1.46 1.44-1.46h20.51c.94 0 1.45.46 1.45 1.46v13.91c0 1.01-.51 1.46-1.45 1.46Zm1.2-1.91h18.12c.48 0 .73-.27.73-.75v-11.5c0-.5-.25-.77-.73-.77H5.662c-.48 0-.74.27-.74.77v11.5c0 .48.26.75.74.75m1.44-1.93c-.15 0-.23-.08-.23-.24v-8.67c0-.15.08-.23.23-.23h15.23c.17 0 .25.08.25.23v8.67c0 .16-.08.24-.25.24Z" />
  </svg>
);
export default SvgLightpanelBold;
