import * as React from "react";
const SvgLbbuttonroundedbottomhorizontalBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.952 21.454h7.9c6.98 0 9.95-3.06 9.95-9.91v-7.47c0-2.62-1.46-4.07-4.09-4.07H4.102c-2.65 0-4.1 1.44-4.1 4.07v7.47c0 6.85 2.96 9.91 9.95 9.91m.1-3.02c-4.93 0-7.03-2.1-7.03-6.87v-7.12c0-.93.51-1.42 1.41-1.42h18.94c.9 0 1.4.49 1.4 1.42v7.12c0 4.77-2.1 6.87-7.03 6.87Zm-.81-3.15h2.98a.815.815 0 0 0 0-1.63h-1.97v-6.62c0-.55-.44-1-.98-1-.55 0-1 .45-1 1v7.22c0 .64.35 1.03.97 1.03m5.83.01h2.41c1.57 0 2.43-1.13 2.43-2.6 0-1.1-.69-2.11-1.71-2.19v-.06c.88-.14 1.49-1.06 1.49-1.98 0-1.44-.93-2.28-2.29-2.28h-2.33c-.67 0-.99.45-.99 1.05v7.02c0 .61.33 1.04.99 1.04m.98-5.32v-2.33h.75c.74 0 1 .48 1 1.13 0 .73-.36 1.2-1.09 1.2Zm0 3.87v-2.62h.73c.73 0 1.15.48 1.15 1.29 0 .79-.34 1.33-1.12 1.33Z" />
  </svg>
);
export default SvgLbbuttonroundedbottomhorizontalBold;
