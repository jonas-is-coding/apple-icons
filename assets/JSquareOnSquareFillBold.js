import * as React from "react";
const SvgJsquareonsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15.912-.003H4.142c-2.68 0-4.14 1.46-4.14 4.12v11.82c0 2.66 1.46 4.11 4.14 4.11h11.77c2.67 0 4.14-1.45 4.14-4.11V4.117c0-2.66-1.47-4.12-4.14-4.12m-6.38 15.55c-1.94 0-3.44-.9-3.87-2.29-.07-.23-.11-.45-.11-.69 0-.8.54-1.34 1.34-1.34.73 0 1.15.3 1.37.95.2.57.61.89 1.24.89.74 0 1.15-.5 1.15-1.51v-5.43c0-1.02.54-1.65 1.48-1.65.95 0 1.5.62 1.5 1.65v5.51c0 2.51-1.51 3.91-4.1 3.91m16.88-5.61c0-2.6-1.42-4.1-4.13-4.1h-.33v10.1c0 3.71-2.31 6.01-6.04 6.01h-9.82v.11c0 2.65 1.47 4.1 4.14 4.1h12.05c2.68 0 4.13-1.45 4.13-4.11Z" />
  </svg>
);
export default SvgJsquareonsquarefillBold;
