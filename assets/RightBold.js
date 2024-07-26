import * as React from "react";
const SvgRightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.782 17.668c1.11 0 1.77-.68 1.77-1.84v-4.79h2.95c.06 0 .13-.01.19-.01l2.99 5.32c.56 1 .96 1.32 1.79 1.32 1.02 0 1.78-.69 1.78-1.65 0-.4-.08-.7-.37-1.19l-2.59-4.42c1.94-.83 3.02-2.67 3.02-4.86 0-3.44-2.31-5.55-6.3-5.55h-5.23c-1.1 0-1.78.71-1.78 1.84v13.99c0 1.16.65 1.84 1.78 1.84m1.77-9.25v-5.61h3.1c1.88 0 3.03 1.08 3.03 2.81 0 1.74-1.09 2.8-3 2.8Z" />
  </svg>
);
export default SvgRightBold;
