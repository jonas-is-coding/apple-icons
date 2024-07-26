import * as React from "react";
const SvgEsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm4.27-2.99h4.98c.74 0 1.18-.41 1.18-1.1 0-.68-.44-1.09-1.18-1.09h-3.79v-2.16h3.64c.63 0 1.04-.34 1.04-.95s-.41-.96-1.04-.96h-3.64v-2.02h3.79c.74 0 1.18-.41 1.18-1.09 0-.7-.44-1.11-1.18-1.11h-4.98c-1.03 0-1.55.6-1.55 1.63v7.21c0 1.05.52 1.64 1.55 1.64" />
  </svg>
);
export default SvgEsquareBold;
