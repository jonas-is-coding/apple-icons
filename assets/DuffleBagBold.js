import * as React from "react";
const SvgDufflebagBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.502 26.246h27.15c2.67 0 4.5-1.8 4.5-4.44v-7.37c0-3.94-2.8-6.71-6.78-6.71h-2.82v-2c0-3.51-2.56-5.73-6.57-5.73h-3.81c-4.01 0-6.56 2.22-6.56 5.73v2h-2.81c-3.99 0-6.8 2.77-6.8 6.71v7.37c0 2.64 1.83 4.44 4.5 4.44m7.8-20.52c0-1.89 1.44-3.02 3.87-3.02h3.81c2.44 0 3.87 1.13 3.87 3.02v2h-11.55Zm-7.71 17.82c-1.11 0-1.88-.79-1.88-1.92v-7.07c0-2.49 1.62-4.14 4.11-4.14h.48v13.13Zm4.98 0v-13.13h2.77v13.13Zm5.04-8.87v-4.26h6.93v4.26Zm9.21 8.87v-13.13h2.77v13.13Zm5.51-13.13c2.48 0 4.13 1.65 4.13 4.14v7.07c0 1.13-.79 1.92-1.9 1.92h-2.7v-13.13Zm-14.72 13.13v-6.6h6.93v6.6Z" />
  </svg>
);
export default SvgDufflebagBold;
