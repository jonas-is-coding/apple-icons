import * as React from "react";
const SvgArrowrighttolinesquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m12.21-5.74c-.61 0-1.08-.47-1.08-1.08v-8.6c0-.61.47-1.08 1.08-1.08s1.09.47 1.09 1.08v8.6c0 .61-.48 1.08-1.09 1.08m-12.21-5.37c0-.67.48-1.11 1.17-1.11h4.17l1.83.13-1.7-1.48-.76-.76c-.23-.22-.37-.48-.37-.81 0-.62.47-1.06 1.12-1.06.27 0 .55.1.77.35l3.83 3.91c.2.21.34.5.34.83 0 .32-.13.61-.34.82l-3.82 3.91c-.21.23-.53.35-.8.35-.65 0-1.1-.45-1.1-1.06 0-.35.14-.61.37-.82l.77-.74 1.7-1.48-1.84.15h-4.17c-.69 0-1.17-.46-1.17-1.13" />
  </svg>
);
export default SvgArrowrighttolinesquarefillBold;
