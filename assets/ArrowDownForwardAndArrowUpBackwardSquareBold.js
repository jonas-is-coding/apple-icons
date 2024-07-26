import * as React from "react";
const SvgArrowdownforwardandarrowupbackwardsquareBold = ({
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
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm1.74-8.19h3.69c.84 0 1.31-.44 1.31-1.3v-3.71c0-.55-.46-.99-1.01-.99s-.99.44-.99.99v.4l.16 1.35-2.34-2.51c-.42-.46-1.16-.44-1.61-.01-.44.46-.45 1.2 0 1.62l2.5 2.32-1.33-.17h-.38a1.005 1.005 0 0 0 0 2.01m6.01 6.01c.55 0 1.01-.43 1.01-1v-.4l-.18-1.33 2.35 2.49c.42.47 1.16.46 1.61.02.44-.45.45-1.2-.01-1.61l-2.5-2.33 1.34.16h.38c.55 0 1-.44 1-.99s-.45-1.01-1-1.01h-3.68c-.86 0-1.32.44-1.32 1.31v3.69c0 .57.45 1 1 1" />
  </svg>
);
export default SvgArrowdownforwardandarrowupbackwardsquareBold;
