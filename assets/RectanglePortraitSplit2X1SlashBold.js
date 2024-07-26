import * as React from "react";
const SvgRectangleportraitsplit2X1SlashBold = ({
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
    <path d="M13.624 10.792v-7.77h4.4c1 0 1.45.51 1.45 1.45v12.18l3.03 3.02V4.142c0-2.68-1.46-4.14-4.12-4.14H5.834c-.97 0-1.77.21-2.38.62l2.58 2.58c.16-.11.38-.18.65-.18h3.92v4.75Zm8.92 13.94c.4.37 1.02.38 1.4 0 .37-.39.38-1.02 0-1.41L1.684 1.082a.975.975 0 0 0-1.4 0c-.38.36-.38 1.02 0 1.39Zm-16.71 1.06h12.55c.98 0 1.77-.2 2.38-.6l-2.59-2.59c-.15.11-.36.17-.63.17h-3.92v-4.72l-3.02-3.03v7.75h-4.41c-.99 0-1.45-.51-1.45-1.44V9.172l-3.02-3.03v15.51c0 2.69 1.45 4.14 4.11 4.14" />
  </svg>
);
export default SvgRectangleportraitsplit2X1SlashBold;
