import * as React from "react";
const SvgAlignhorizontalleftfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.422 29.213c.76 0 1.41-.62 1.41-1.38V1.392c0-.77-.65-1.39-1.41-1.39-.78 0-1.42.62-1.42 1.39v26.44c0 .76.64 1.38 1.42 1.38m6.52-15.63h10.37c1.96 0 3.13-1.17 3.13-3.09v-4.39c0-1.91-1.17-3.08-3.13-3.08H7.942c-1.94 0-3.13 1.17-3.13 3.08v4.39c0 1.92 1.19 3.09 3.13 3.09m0 12.59h18.31c1.94 0 3.12-1.16 3.12-3.09v-4.38c0-1.92-1.18-3.08-3.12-3.08H7.942c-1.94 0-3.13 1.16-3.13 3.08v4.38c0 1.93 1.19 3.09 3.13 3.09" />
  </svg>
);
export default SvgAlignhorizontalleftfillBold;
