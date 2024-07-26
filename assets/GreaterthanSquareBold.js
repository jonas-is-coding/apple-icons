import * as React from "react";
const SvgGreaterthansquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm3.93-3.53c.28 0 .51-.06.75-.17l6.46-3.24c.57-.28.86-.64.86-1.21 0-.56-.29-.97-.86-1.25l-6.46-3.3c-.25-.13-.47-.18-.76-.18-.73 0-1.26.53-1.26 1.25 0 .61.3.98 1.02 1.28l4.57 2.11v.11l-4.57 2.07c-.74.29-1.02.66-1.02 1.27 0 .73.53 1.26 1.27 1.26" />
  </svg>
);
export default SvgGreaterthansquareBold;
