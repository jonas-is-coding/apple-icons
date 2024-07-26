import * as React from "react";
const SvgSpeakersquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm8.72-2.88c.49 0 .87-.38.87-.88v-8.82c0-.49-.38-.89-.88-.89-.33 0-.59.13-.93.45l-2.35 2.21c-.04.04-.09.04-.13.04h-1.62c-.93 0-1.45.54-1.45 1.52v2.15c0 .98.52 1.52 1.45 1.52h1.62c.04 0 .08.01.12.04l2.36 2.22c.32.31.59.44.94.44" />
  </svg>
);
export default SvgSpeakersquareBold;
