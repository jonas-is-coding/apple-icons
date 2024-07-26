import * as React from "react";
const SvgArrowdownlefttoprightrectangleBold = ({
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
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.472c0-.99.51-1.45 1.44-1.45h19.05c.93 0 1.44.46 1.44 1.45v13.46c0 .99-.51 1.45-1.44 1.45Zm11.6-13.77c-.62 0-1.01.47-1.01 1.14v4.79c0 .89.51 1.34 1.34 1.34h4.82c.69 0 1.14-.39 1.14-1.01 0-.63-.45-1.02-1.13-1.02h-1.52l-1.3.16 1.47-1.31 3.05-3.03c.23-.24.38-.54.38-.85 0-.69-.51-1.15-1.16-1.15-.34 0-.63.13-.88.38l-3.03 3.02-1.3 1.47.15-1.37v-1.42c0-.68-.39-1.14-1.02-1.14" />
  </svg>
);
export default SvgArrowdownlefttoprightrectangleBold;
