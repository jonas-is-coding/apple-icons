import * as React from "react";
const SvgRectangleonrectanglesquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.403h14.13c2.68 0 4.13-1.45 4.13-4.11V4.113c0-2.66-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.46-1.44-1.47V4.473c0-.99.51-1.45 1.44-1.45h13.48c.94 0 1.44.46 1.44 1.45v13.44c0 1.01-.5 1.47-1.44 1.47Zm2.05-9.67c0-1.49.82-2.31 2.31-2.31h6.32v-.06c0-.99-.58-1.57-1.64-1.57h-7.09c-1.07 0-1.64.58-1.64 1.64v5.06c0 1.05.57 1.62 1.6 1.62h.14Zm2.41 6.79h7.07c1.08 0 1.66-.57 1.66-1.64v-5.07c0-1.05-.58-1.63-1.66-1.63h-7.07c-1.08 0-1.66.58-1.66 1.63v5.07c0 1.07.58 1.64 1.66 1.64" />
  </svg>
);
export default SvgRectangleonrectanglesquareBold;
