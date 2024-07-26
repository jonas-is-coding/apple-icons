import * as React from "react";
const SvgSquareonsquarebadgepersoncropfillBold = ({
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
    <path d="M.002 16.217c0 2.61 1.42 4.11 4.14 4.11h.32v-10.11c0-3.71 2.31-6.01 6.05-6.01h9.81v-.11c0-2.63-1.47-4.1-4.14-4.1H4.142c-2.68 0-4.14 1.46-4.14 4.12Zm10.51 9.94h10.34a7.88 7.88 0 0 1-2.37-5.63c0-4.34 3.58-7.93 7.93-7.93v-2.38c0-2.66-1.45-4.11-4.13-4.11h-11.77c-2.68 0-4.15 1.45-4.15 4.11v11.83c0 2.66 1.47 4.11 4.15 4.11m15.91.55c3.37 0 6.18-2.81 6.18-6.18s-2.79-6.16-6.18-6.16c-3.37 0-6.17 2.79-6.17 6.16 0 3.38 2.8 6.18 6.17 6.18m0-6.06c-1.02 0-1.8-.83-1.8-1.99 0-1.03.8-1.91 1.8-1.91 1.01 0 1.81.88 1.81 1.91 0 1.16-.79 1.99-1.81 1.99m0 4.28c-1.7 0-2.98-.93-3.28-1.7v-.05c.37-.72 1.67-1.52 3.28-1.52 1.62 0 2.92.8 3.29 1.52v.05c-.31.77-1.59 1.7-3.29 1.7" />
  </svg>
);
export default SvgSquareonsquarebadgepersoncropfillBold;
