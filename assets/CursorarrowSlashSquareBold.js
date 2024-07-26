import * as React from "react";
const SvgCursorarrowslashsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm9.92-7.2.42-.02c.55-.01.81-.61.41-1.03l-6.28-6.35c-.39-.4-.99-.18-1 .4v.57Zm1.72 4.87c.27.25.7.27.96 0 .27-.27.27-.69 0-.95L6.332 5.354a.694.694 0 0 0-.98 0 .67.67 0 0 0 0 .96Zm-3.16.69 1.17-.45c.19-.07.28-.24.24-.4l-.27-.63-6.22-6.22-.06 4.14c-.01.62.68.84 1.08.41l1.48-1.55 1.72 4.29c.14.34.45.56.86.41" />
  </svg>
);
export default SvgCursorarrowslashsquareBold;
