import * as React from "react";
const SvgSquarefillandlineverticalandsquarefillBold = ({
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
    <path d="M19.432 25.671c.79 0 1.4-.6 1.4-1.39v-22.9c0-.77-.61-1.38-1.4-1.38-.81 0-1.42.61-1.42 1.38v22.9c0 .79.61 1.39 1.42 1.39m-16.24-5.41h8.47c1.96 0 3.2-1.22 3.2-3.15v-8.56c0-1.92-1.24-3.15-3.2-3.15h-8.47c-1.95 0-3.19 1.23-3.19 3.15v8.56c0 1.93 1.24 3.15 3.19 3.15m23.98 0h8.48c1.95 0 3.2-1.22 3.2-3.15v-8.56c0-1.92-1.25-3.15-3.2-3.15h-8.48c-1.95 0-3.18 1.23-3.18 3.15v8.56c0 1.93 1.23 3.15 3.18 3.15" />
  </svg>
);
export default SvgSquarefillandlineverticalandsquarefillBold;
