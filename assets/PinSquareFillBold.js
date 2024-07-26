import * as React from "react";
const SvgPinsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m2.33-9.04c0-1.28 1.15-2.54 2.79-3.16l.18-2.73c-.88-.5-1.53-1.03-1.84-1.4-.17-.23-.27-.46-.27-.67 0-.42.34-.74.8-.74h6.31c.45 0 .79.32.79.74 0 .21-.09.44-.26.65-.29.39-.96.92-1.85 1.42l.19 2.73c1.64.62 2.8 1.88 2.8 3.16 0 .58-.4.96-.97.96h-2.92v2.09c0 .99-.67 2.36-.94 2.36s-.93-1.37-.93-2.36v-2.09h-2.92c-.58 0-.96-.38-.96-.96" />
  </svg>
);
export default SvgPinsquarefillBold;
