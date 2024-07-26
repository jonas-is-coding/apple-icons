import * as React from "react";
const SvgEqualsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm2.82-9.15h7.85c.82 0 1.37-.44 1.37-1.19s-.53-1.19-1.37-1.19h-7.85c-.85 0-1.38.43-1.38 1.19 0 .75.56 1.19 1.38 1.19m0 4.37h7.85c.82 0 1.37-.45 1.37-1.19 0-.76-.53-1.2-1.37-1.2h-7.85c-.85 0-1.38.43-1.38 1.2 0 .74.56 1.19 1.38 1.19" />
  </svg>
);
export default SvgEqualsquareBold;
