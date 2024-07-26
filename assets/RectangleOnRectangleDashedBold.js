import * as React from "react";
const SvgRectangleonrectangledashedBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 5.799h3.02v-1.31c0-1 .51-1.47 1.44-1.47h1.32v-3.02h-1.64c-2.68 0-4.14 1.45-4.14 4.11Zm10.3 19.54h15.97c2.67 0 4.14-1.46 4.14-4.12V9.949c0-2.66-1.47-4.11-4.14-4.11h-2.03v-1.73c0-2.66-1.46-4.11-4.14-4.11h-1.63v3.02h1.3c.95 0 1.44.47 1.44 1.47v1.35h-10.91c-2.68 0-4.14 1.45-4.14 4.11v6.53h-1.7c-.93 0-1.44-.46-1.44-1.46v-1.31H.002v1.69c0 2.65 1.46 4.1 4.14 4.1h2.02v1.72c0 2.66 1.46 4.12 4.14 4.12m2.41-22.32h4.55v-3.02h-4.55Zm-5.74 0h4.55v-3.02h-4.55Zm-6.97 9.5h3.02v-5.52H.002Zm10.63 9.79c-.95 0-1.44-.47-1.44-1.46v-10.54c0-.99.49-1.45 1.44-1.45h15.3c.94 0 1.46.46 1.46 1.45v10.54c0 .99-.52 1.46-1.46 1.46Z" />
  </svg>
);
export default SvgRectangleonrectangledashedBold;
