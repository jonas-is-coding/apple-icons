import * as React from "react";
const SvgVideosquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm2.32-3.72h5.49c1.24 0 1.93-.68 1.93-1.86v-5.17c0-1.18-.67-1.86-1.9-1.86h-5.52c-1.2 0-1.92.68-1.92 1.86v5.23c0 1.19.69 1.8 1.92 1.8m8.08-2.66 1.79 1.53c.27.21.52.36.79.36.45 0 .77-.32.77-.82v-5.66c0-.5-.32-.82-.77-.82-.27 0-.52.15-.79.37l-1.79 1.52Z" />
  </svg>
);
export default SvgVideosquareBold;
