import * as React from "react";
const SvgIcloudsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm2.73-4.04h8.46c1.36 0 2.42-1.09 2.42-2.48 0-1.15-.76-2.01-1.72-2.32q.015-.27-.03-.54c-.15-2.13-1.9-3.8-4.15-3.8-1.3 0-2.53.6-3.27 1.59-.25-.04-.52-.02-.75.02-.99.13-1.8.89-1.99 1.92-1.06.45-1.8 1.46-1.8 2.78 0 1.75 1.23 2.83 2.83 2.83" />
  </svg>
);
export default SvgIcloudsquareBold;
