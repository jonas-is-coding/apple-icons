import * as React from "react";
const SvgLocksquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm2.6-3.75c0 .91.41 1.33 1.27 1.33h5.77c.84 0 1.25-.42 1.25-1.33v-4.41c0-.76-.3-1.18-.9-1.27v-1.22c0-2.16-1.31-3.6-3.24-3.6s-3.23 1.44-3.23 3.6v1.2c-.61.11-.92.53-.92 1.29Zm2.55-5.73v-1.27c0-1.16.63-1.91 1.6-1.91.98 0 1.6.74 1.6 1.91v1.27Z" />
  </svg>
);
export default SvgLocksquareBold;
