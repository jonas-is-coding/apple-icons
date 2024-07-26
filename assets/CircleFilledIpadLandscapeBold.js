import * as React from "react";
const SvgCirclefilledipadlandscapeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.152 22.402h20.26c2.68 0 4.14-1.46 4.14-4.11V4.112c0-2.66-1.46-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.47 4.11 4.15 4.11m.32-3.02c-.94 0-1.44-.46-1.44-1.45V4.492c0-1 .5-1.47 1.43-1.47h19.62c.94 0 1.44.47 1.44 1.47v13.44c0 .99-.5 1.45-1.44 1.45Zm9.8-2.48c3.13 0 5.7-2.56 5.7-5.71 0-3.13-2.57-5.68-5.7-5.68s-5.69 2.55-5.69 5.68c0 3.15 2.56 5.71 5.69 5.71" />
  </svg>
);
export default SvgCirclefilledipadlandscapeBold;
