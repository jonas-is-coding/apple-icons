import * as React from "react";
const SvgRectangleonrectanglesquarefillBold = ({
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
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m2.2-12.76v4.61h-.15c-1.09 0-1.7-.59-1.7-1.72v-5.32c0-1.12.61-1.72 1.73-1.72h7.45c1.14 0 1.75.6 1.75 1.64v.07h-6.64c-1.57 0-2.44.87-2.44 2.44m2.53 7.15c-1.14 0-1.75-.59-1.75-1.72v-5.34c0-1.12.61-1.72 1.75-1.72h7.45c1.13 0 1.74.6 1.74 1.72v5.34c0 1.13-.61 1.72-1.74 1.72Z" />
  </svg>
);
export default SvgRectangleonrectanglesquarefillBold;
