import * as React from "react";
const SvgUsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm6.75-2.74c2.8 0 4.71-1.59 4.71-3.94v-5.42c0-.98-.5-1.54-1.41-1.54-.88 0-1.4.56-1.4 1.54v5.15c0 1.14-.76 1.9-1.9 1.9-1.15 0-1.91-.76-1.91-1.9v-5.15c0-.98-.5-1.54-1.4-1.54-.89 0-1.41.56-1.41 1.54v5.42c0 2.35 1.91 3.94 4.72 3.94" />
  </svg>
);
export default SvgUsquareBold;
