import * as React from "react";
const SvgSuitcaserollingBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.572 32.547h.77c.67 0 1.13-.44 1.13-1.12v-.76h7.04v.76c0 .68.46 1.12 1.13 1.12h.77c.67 0 1.11-.44 1.11-1.12v-.76c2.03 0 3.46-1.44 3.46-3.53v-17.01c0-2.08-1.43-3.53-3.51-3.53h-.83v-3.57c0-1.93-1.19-3.03-3.27-3.03h-4.71c-2.12 0-3.31 1.1-3.31 3.03v3.57h-.85c-2.07 0-3.5 1.45-3.5 3.53v17.01c0 2.07 1.4 3.51 3.46 3.53v.76c0 .68.44 1.12 1.11 1.12m2.45-29.23c0-.59.35-.91.96-.91h4.1c.56 0 .89.33.89.91v3.28h-5.95Zm-4.47 6.95c0-.66.45-1.13 1.08-1.13h12.72c.63 0 1.07.47 1.07 1.13v12.62H2.552Zm1.08 17.86c-.63 0-1.08-.46-1.08-1.12v-1.58h14.87v1.58c0 .66-.44 1.12-1.07 1.12Z" />
  </svg>
);
export default SvgSuitcaserollingBold;
