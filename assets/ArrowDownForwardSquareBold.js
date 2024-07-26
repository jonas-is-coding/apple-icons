import * as React from "react";
const SvgArrowdownforwardsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm10.37-11.6c-.7 0-1.13.5-1.13 1.27v1.6l.16 1.45-1.39-1.57-3.72-3.7c-.29-.3-.62-.42-.99-.42-.74 0-1.32.51-1.32 1.29 0 .35.17.7.41.94l3.75 3.75 1.59 1.4-1.39-.19h-1.71c-.77 0-1.26.45-1.26 1.15s.49 1.14 1.27 1.14h5.35c.96 0 1.53-.52 1.53-1.52v-5.32c0-.76-.44-1.27-1.15-1.27" />
  </svg>
);
export default SvgArrowdownforwardsquareBold;
