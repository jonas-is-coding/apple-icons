import * as React from "react";
const SvgArrowupbackwardandarrowdownforwardsquareBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm1.84-7.98c.55 0 1.01-.44 1.01-1v-.47l-.17-1.33 2 2.14c.42.48 1.16.46 1.6.01.44-.44.46-1.18-.01-1.6l-2.14-1.98 1.33.16h.45c.55 0 1-.43 1-.99s-.45-1.01-1-1.01h-3.75c-.86 0-1.31.44-1.31 1.31v3.76c0 .56.44 1 .99 1m5.71 5.69h3.75c.86 0 1.31-.43 1.31-1.31v-3.76c0-.55-.44-1-.99-1-.57 0-1.01.45-1.01 1v.47l.17 1.35-2-2.16c-.42-.47-1.16-.46-1.6-.01-.45.44-.46 1.18.01 1.6l2.13 1.98-1.32-.16h-.45c-.55 0-1.01.44-1.01 1 0 .55.46 1 1.01 1" />
  </svg>
);
export default SvgArrowupbackwardandarrowdownforwardsquareBold;
