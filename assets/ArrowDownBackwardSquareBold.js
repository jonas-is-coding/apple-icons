import * as React from "react";
const SvgArrowdownbackwardsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm3.12-11.6c-.69 0-1.14.51-1.14 1.27v5.32c0 1 .58 1.52 1.54 1.52h5.34c.78 0 1.28-.44 1.28-1.14s-.5-1.15-1.28-1.15h-1.7l-1.38.19 1.58-1.4 3.75-3.75c.25-.24.41-.59.41-.94 0-.78-.57-1.29-1.31-1.29-.37 0-.7.12-1 .42l-3.71 3.7-1.4 1.57.17-1.45v-1.6c0-.77-.45-1.27-1.15-1.27" />
  </svg>
);
export default SvgArrowdownbackwardsquareBold;
