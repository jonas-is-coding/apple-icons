import * as React from "react";
const SvgCursorarrowsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm3.35-5.18c-.01.61.68.83 1.09.41l1.48-1.56 1.72 4.29c.14.34.45.56.86.41l1.16-.43c.42-.17.42-.6.3-.86l-1.85-4.26 2.19-.02c.6.02.88-.59.46-1.03l-6.27-6.36c-.4-.4-.98-.17-.99.4Z" />
  </svg>
);
export default SvgCursorarrowsquareBold;
