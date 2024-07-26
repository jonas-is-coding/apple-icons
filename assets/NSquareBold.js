import * as React from "react";
const SvgNsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm3.43-2.81c.78 0 1.25-.51 1.25-1.36v-5.04h.09l4.1 5.65c.44.57.74.75 1.28.75.72 0 1.16-.47 1.16-1.23v-8.24c0-.86-.46-1.36-1.25-1.36s-1.24.51-1.24 1.36v5h-.1l-4.05-5.57c-.47-.62-.76-.79-1.3-.79-.73 0-1.19.5-1.19 1.28v8.19c0 .84.46 1.36 1.25 1.36" />
  </svg>
);
export default SvgNsquareBold;
