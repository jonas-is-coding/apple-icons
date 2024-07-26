import * as React from "react";
const SvgMappinsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm3.88-12.01c0 1.22.76 2.27 1.83 2.68v5.3c0 1.32.46 2.82 1.04 2.82s1.03-1.47 1.03-2.82v-5.3c1.09-.4 1.86-1.45 1.86-2.68 0-1.6-1.3-2.89-2.89-2.87a2.87 2.87 0 0 0-2.87 2.87m1.3-.78c-.01-.5.42-.92.92-.92s.92.42.91.92c0 .5-.41.92-.91.92a.93.93 0 0 1-.92-.92" />
  </svg>
);
export default SvgMappinsquareBold;
