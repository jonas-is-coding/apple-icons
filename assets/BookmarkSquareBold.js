import * as React from "react";
const SvgBookmarksquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.406h14.13c2.68 0 4.13-1.45 4.13-4.1V4.115c0-2.65-1.45-4.12-4.13-4.12H4.142c-2.68 0-4.14 1.46-4.14 4.12v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.46V4.486c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.44c0 1-.5 1.46-1.44 1.46Zm3.64-2.21c.34 0 .56-.15.99-.57l2.08-2.07c.02-.03.07-.03.08 0l2.08 2.07c.44.42.65.57.99.57.53 0 .88-.37.88-.96v-9.18c0-1.15-.64-1.79-1.77-1.79h-4.44c-1.13 0-1.76.64-1.76 1.79v9.18c0 .59.35.96.87.96" />
  </svg>
);
export default SvgBookmarksquareBold;
