import * as React from "react";
const SvgRbuttonroundedbottomhorizontalBold = ({
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
    <path d="M9.952 21.454h7.9c6.98 0 9.95-3.06 9.95-9.91v-7.47c0-2.62-1.46-4.07-4.09-4.07H4.102c-2.65 0-4.1 1.44-4.1 4.07v7.47c0 6.85 2.96 9.91 9.95 9.91m.1-3.02c-4.93 0-7.03-2.1-7.03-6.87v-7.12c0-.93.51-1.42 1.41-1.42h18.94c.9 0 1.4.49 1.4 1.42v7.12c0 4.77-2.1 6.87-7.03 6.87Zm1.53-3.04c.76 0 1.14-.49 1.14-1.18v-2.13h1.19l1.4 2.55c.3.55.63.76 1.15.76.62 0 1.05-.41 1.05-1.01 0-.31-.12-.58-.26-.81l-1.13-1.85c1-.49 1.61-1.54 1.61-2.67 0-2.02-1.43-3.12-3.53-3.12h-2.62c-.67 0-1.12.44-1.12 1.23v7.05c0 .73.39 1.18 1.12 1.18m1.14-4.92v-2.8h1.26c.91 0 1.48.54 1.48 1.42 0 .89-.54 1.38-1.5 1.38Z" />
  </svg>
);
export default SvgRbuttonroundedbottomhorizontalBold;
