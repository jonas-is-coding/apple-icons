import * as React from "react";
const SvgArrowtriangleheadbranchBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m3.272 7.001 1.28-1.64.31.19c2.35 1.5 5.53 5.2 5.53 7.88v6.27c0 1.02.5 1.57 1.41 1.57s1.42-.55 1.42-1.57v-6.27c0-2.68 3.16-6.38 5.52-7.88l.25-.16 1.14 1.57c.6.83 1.44.56 1.76-.44l1.64-5.02c.26-.81-.21-1.46-1.06-1.46l-5.28.02c-1.07-.01-1.55.71-.96 1.52l1.08 1.49-.06.04c-2.16 1.43-4.81 4.41-5.43 6.37h-.04c-.64-1.97-3.27-4.94-5.43-6.37l-.05-.03 1.06-1.35c.61-.78.14-1.52-.92-1.55l-5.28-.18c-.85-.04-1.34.6-1.1 1.41l1.47 5.07c.3 1.02 1.12 1.31 1.74.52" />
  </svg>
);
export default SvgArrowtriangleheadbranchBold;
