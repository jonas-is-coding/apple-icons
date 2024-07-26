import * as React from "react";
const SvgPsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm4.18-2.81c.91 0 1.44-.61 1.44-1.6v-1.47h1.77c2.4 0 3.97-1.49 3.97-3.79s-1.56-3.8-3.95-3.8h-3.12c-1.02 0-1.54.6-1.54 1.63v7.43c0 .99.51 1.6 1.43 1.6m1.44-5.16v-3.41h1.38c1.05 0 1.65.62 1.65 1.71 0 1.08-.6 1.7-1.65 1.7Z" />
  </svg>
);
export default SvgPsquareBold;
