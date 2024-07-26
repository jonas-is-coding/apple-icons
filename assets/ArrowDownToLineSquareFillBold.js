import * as React from "react";
const SvgArrowdowntolinesquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.13-7.77c-.33 0-.61-.13-.83-.34l-3.89-3.83c-.24-.21-.35-.51-.35-.78 0-.66.44-1.11 1.06-1.11.34 0 .59.13.8.37l.74.76 1.5 1.71-.15-1.84v-4.18c0-.68.44-1.16 1.12-1.16.66 0 1.12.48 1.12 1.16v4.18l-.15 1.83 1.48-1.7.77-.76c.22-.23.48-.37.82-.37.6 0 1.05.46 1.05 1.11 0 .28-.1.57-.34.79l-3.92 3.82c-.22.2-.5.34-.83.34m-4.29 2.9c-.61 0-1.08-.48-1.08-1.09s.47-1.08 1.08-1.08h8.59c.61 0 1.08.47 1.08 1.08s-.47 1.09-1.08 1.09Z" />
  </svg>
);
export default SvgArrowdowntolinesquarefillBold;
