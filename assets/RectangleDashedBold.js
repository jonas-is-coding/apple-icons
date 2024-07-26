import * as React from "react";
const SvgRectangledashedBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 6.312h3.02v-1.82c0-1 .51-1.47 1.44-1.47h1.82V.002h-2.14c-2.68 0-4.14 1.45-4.14 4.11Zm27.97 0v-2.2c0-2.66-1.46-4.11-4.14-4.11h-2.14v3.02h1.82c.93 0 1.44.47 1.44 1.47v1.82Zm-19.78-3.29h4.84V.002h-4.84Zm6.75 0h4.85V.002h-4.85ZM.002 14.202h3.02v-5.99H.002Zm27.97 0v-5.99h-3.02v5.99Zm-23.83 8.2h2.14v-3.02h-1.82c-.93 0-1.44-.46-1.44-1.45v-1.83H.002v2.19c0 2.66 1.46 4.11 4.14 4.11m19.69 0c2.68 0 4.14-1.45 4.14-4.11v-2.19h-3.02v1.83c0 .99-.51 1.45-1.44 1.45h-1.82v3.02Zm-15.64 0h4.84v-3.02h-4.84Zm6.75 0h4.85v-3.02h-4.85Z" />
  </svg>
);
export default SvgRectangledashedBold;
