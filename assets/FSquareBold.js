import * as React from "react";
const SvgFsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm4.34-2.81c.91 0 1.44-.61 1.44-1.6v-2.68h3.48c.65 0 1.04-.36 1.04-.99 0-.62-.39-.99-1.04-.99h-3.5v-2.2h3.74c.73 0 1.18-.41 1.18-1.09 0-.7-.45-1.11-1.18-1.11h-5.04c-1.02 0-1.55.6-1.55 1.63v7.43c0 .99.52 1.6 1.43 1.6" />
  </svg>
);
export default SvgFsquareBold;
