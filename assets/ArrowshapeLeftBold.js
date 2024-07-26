import * as React from "react";
const SvgArrowshapeleftBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.004 11.169c0 .5.22 1.1.69 1.55l9.33 8.69c.7.65 1.27.94 2 .94 1.1 0 1.92-.83 1.92-1.92v-3.78h8.5c2.17 0 3.43-1.26 3.43-3.41v-4.06c0-2.16-1.26-3.43-3.43-3.43h-8.5v-3.79c0-1.09-.82-1.96-1.93-1.96-.71 0-1.22.28-1.99.99l-9.33 8.64c-.48.45-.69 1.02-.69 1.54m3.37 0c0-.07.04-.12.13-.21l7.48-7.12a.36.36 0 0 1 .18-.08c.12 0 .2.08.2.2v4.1c0 .27.12.38.38.38h10.4c.68 0 1.05.34 1.05 1.04v3.45c0 .7-.37 1.04-1.05 1.04h-10.4c-.26 0-.38.12-.38.37v4c0 .12-.08.2-.18.2-.07 0-.13-.02-.2-.09l-7.48-7.07c-.09-.08-.13-.14-.13-.21" />
  </svg>
);
export default SvgArrowshapeleftBold;
