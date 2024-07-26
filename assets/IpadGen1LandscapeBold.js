import * as React from "react";
const SvgIpadgen1LandscapeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.152 22.402h20.26c2.68 0 4.14-1.46 4.14-4.11V4.112c0-2.66-1.46-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.47 4.11 4.15 4.11m.76-3.02V3.022h18.73v16.36Zm21-6.97c-.66 0-1.2-.54-1.2-1.22 0-.67.54-1.21 1.21-1.21.68 0 1.21.54 1.21 1.21 0 .68-.53 1.22-1.22 1.22m-23.31-.44c-.42 0-.76-.35-.77-.78 0-.42.35-.76.77-.76.43 0 .77.34.77.76 0 .43-.34.77-.77.78" />
  </svg>
);
export default SvgIpadgen1LandscapeBold;
