import * as React from "react";
const SvgCheckmarksquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm5.52-2.6c.48 0 .92-.25 1.2-.67l5.03-7.77c.18-.28.31-.57.31-.86 0-.69-.61-1.17-1.26-1.17-.44 0-.81.24-1.09.71l-4.21 6.77-1.96-2.4c-.29-.37-.61-.52-.99-.52-.68 0-1.23.54-1.23 1.22 0 .33.1.61.35.91l2.62 3.13c.34.42.74.65 1.23.65" />
  </svg>
);
export default SvgCheckmarksquareBold;
