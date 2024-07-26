import * as React from "react";
const SvgArrowdownsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.14-4.98c-.37 0-.73-.13-1.1-.48l-3.96-3.8c-.23-.24-.37-.5-.37-.86 0-.68.57-1.15 1.2-1.15.35 0 .68.14.92.4l1.46 1.54.58.88-.13-1.78v-5.82c0-.74.63-1.37 1.4-1.37.79 0 1.41.63 1.41 1.37v5.82l-.13 1.78.58-.88 1.46-1.54c.23-.26.56-.4.91-.4.63 0 1.21.47 1.21 1.15 0 .36-.14.62-.37.86l-3.96 3.8c-.37.35-.73.48-1.11.48" />
  </svg>
);
export default SvgArrowdownsquarefillBold;
