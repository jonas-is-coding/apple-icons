import * as React from "react";
const SvgExclamationmarksquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm6.75-6.51c.76 0 1.21-.42 1.25-1.23l.18-4.82c.04-.82-.57-1.4-1.44-1.4-.88 0-1.48.56-1.44 1.4l.19 4.85c.03.77.48 1.2 1.26 1.2m0 4.01c.88 0 1.56-.55 1.56-1.4 0-.84-.68-1.4-1.56-1.4s-1.57.56-1.57 1.4.69 1.4 1.57 1.4" />
  </svg>
);
export default SvgExclamationmarksquareBold;
