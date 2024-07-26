import * as React from "react";
const SvgAirpodschargingcaseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.282 24.432h7.92c4.21 0 6.28-2.07 6.28-6.28V6.282c0-4.21-2.07-6.28-6.28-6.28h-7.92c-4.21 0-6.28 2.07-6.28 6.28v11.87c0 4.21 2.07 6.28 6.28 6.28m7.43-18.16h-6.94c-.57 0-1.06.3-1.31.78h-2.51v-.77c0-2.3 1.02-3.33 3.33-3.33h7.92c2.31 0 3.33 1.03 3.33 3.33v.77h-2.51c-.23-.48-.71-.78-1.31-.78m-7.43 15.2c-2.31 0-3.33-1.02-3.33-3.32v-9.76h2.51c.25.48.74.77 1.31.77h6.94c.6 0 1.08-.29 1.31-.77h2.51v9.76c0 2.3-1.02 3.32-3.33 3.32Z" />
  </svg>
);
export default SvgAirpodschargingcaseBold;
