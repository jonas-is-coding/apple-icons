import * as React from "react";
const SvgAlignhorizontalcenterfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.132 26.173h7.73v1.66c0 .76.65 1.38 1.42 1.38.76 0 1.41-.62 1.41-1.38v-1.66h7.73c1.96 0 3.13-1.16 3.13-3.09v-4.38c0-1.92-1.17-3.08-3.13-3.08h-7.73v-2.04h3.77c1.94 0 3.13-1.17 3.13-3.09v-4.39c0-1.91-1.19-3.08-3.13-3.08h-3.77v-1.63c0-.77-.65-1.39-1.41-1.39-.77 0-1.42.62-1.42 1.39v1.63h-3.77c-1.96 0-3.13 1.17-3.13 3.08v4.39c0 1.92 1.17 3.09 3.13 3.09h3.77v2.04h-7.73c-1.95 0-3.13 1.16-3.13 3.08v4.38c0 1.93 1.18 3.09 3.13 3.09" />
  </svg>
);
export default SvgAlignhorizontalcenterfillBold;
