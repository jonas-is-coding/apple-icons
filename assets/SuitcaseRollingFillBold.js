import * as React from "react";
const SvgSuitcaserollingfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M16.472 6.597h-.83v-3.57c0-1.93-1.19-3.03-3.27-3.03h-4.71c-2.12 0-3.31 1.1-3.31 3.03v3.57h-.85c-2.07 0-3.5 1.45-3.5 3.53v12.89h19.98v-12.89c0-2.08-1.43-3.53-3.51-3.53m-9.45-3.28c0-.59.35-.91.96-.91h4.1c.56 0 .89.33.89.91v3.28h-5.95Zm-7.02 22.28v1.54c0 2.07 1.4 3.51 3.46 3.53v.76c0 .68.44 1.12 1.11 1.12h.77c.67 0 1.13-.44 1.13-1.12v-.76h7.04v.76c0 .68.46 1.12 1.13 1.12h.77c.67 0 1.11-.44 1.11-1.12v-.76c2.03 0 3.46-1.44 3.46-3.53v-1.54Z" />
  </svg>
);
export default SvgSuitcaserollingfillBold;
