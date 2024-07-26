import * as React from "react";
const SvgArrowforwardtolinesquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m12.1-5.83c-.6 0-1.08-.47-1.08-1.07v-8.6c0-.61.48-1.08 1.08-1.08.61 0 1.09.47 1.09 1.08v8.6c0 .6-.48 1.07-1.09 1.07m-12.21-5.37c0-.66.48-1.11 1.17-1.11h4.17l1.83.14-1.7-1.48-.76-.77c-.22-.21-.36-.47-.36-.81 0-.61.47-1.06 1.11-1.06.27 0 .55.11.79.35l3.82 3.92c.2.21.34.5.34.82 0 .33-.13.62-.34.83l-3.82 3.9c-.22.23-.53.35-.79.35-.66 0-1.11-.45-1.11-1.05 0-.36.14-.61.36-.82l.77-.74 1.7-1.49-1.84.14h-4.17c-.69 0-1.17-.44-1.17-1.12" />
  </svg>
);
export default SvgArrowforwardtolinesquarefillBold;
