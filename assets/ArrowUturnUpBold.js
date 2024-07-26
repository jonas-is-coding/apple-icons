import * as React from "react";
const SvgArrowuturnupBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.252 22.995c4.96 0 8.37-3.34 8.37-8.63v-6.56l-.12-2.65 1.45 1.78 2.31 2.37c.32.3.69.53 1.21.53.92 0 1.63-.66 1.63-1.64 0-.44-.2-.89-.53-1.22l-6.4-6.47c-.32-.32-.8-.5-1.25-.5-.46 0-.94.18-1.26.5l-6.38 6.47c-.34.33-.53.78-.53 1.22 0 .98.69 1.64 1.63 1.64.51 0 .89-.23 1.19-.53l2.31-2.37 1.45-1.78-.11 2.65v6.46c0 3.37-2.03 5.39-4.9 5.39s-4.92-2.02-4.92-5.39v-2.78c0-1-.76-1.72-1.7-1.72s-1.7.72-1.7 1.72v2.99c0 5.22 3.23 8.52 8.25 8.52" />
  </svg>
);
export default SvgArrowuturnupBold;
