import * as React from "react";
const SvgPauserectangleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.472c0-.99.51-1.45 1.44-1.45h19.05c.93 0 1.44.46 1.44 1.45v13.46c0 .99-.51 1.45-1.44 1.45Zm6.13-3.5h1.34c.63 0 .96-.37.96-.92v-7.53c0-.55-.33-.92-.96-.92h-1.34c-.62 0-.96.37-.96.92v7.53c0 .55.34.92.96.92m5.49 0h1.32c.62 0 .96-.37.96-.92v-7.53c0-.55-.34-.92-.96-.92h-1.32c-.64 0-.98.37-.98.92v7.53c0 .55.34.92.98.92" />
  </svg>
);
export default SvgPauserectangleBold;
