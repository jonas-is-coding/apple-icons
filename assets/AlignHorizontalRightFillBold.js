import * as React from "react";
const SvgAlignhorizontalrightfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M27.952 29.213c.77 0 1.42-.62 1.42-1.38V1.392c0-.77-.65-1.39-1.42-1.39-.76 0-1.41.62-1.41 1.39v26.44c0 .76.65 1.38 1.41 1.38m-6.53-15.63c1.96 0 3.13-1.17 3.13-3.09v-4.39c0-1.91-1.17-3.08-3.13-3.08h-10.37c-1.95 0-3.13 1.17-3.13 3.08v4.39c0 1.92 1.18 3.09 3.13 3.09Zm0 12.59c1.96 0 3.13-1.16 3.13-3.09v-4.38c0-1.92-1.17-3.08-3.13-3.08H3.132c-1.95 0-3.13 1.16-3.13 3.08v4.38c0 1.93 1.18 3.09 3.13 3.09Z" />
  </svg>
);
export default SvgAlignhorizontalrightfillBold;
