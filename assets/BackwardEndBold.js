import * as React from "react";
const SvgBackwardendBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.782 19.706c1.03 0 1.78-.73 1.78-1.73v-7.55c.2.58.69 1.02 1.45 1.46l12.77 7.44c.45.26.92.38 1.38.38 1.05 0 1.94-.73 1.94-2.18V2.176c0-1.45-.89-2.18-1.94-2.18-.46 0-.93.12-1.38.39l-12.77 7.43c-.76.45-1.25.89-1.45 1.46v-7.55c0-.99-.75-1.73-1.78-1.73s-1.78.74-1.78 1.73v16.25c0 1 .75 1.73 1.78 1.73m16.3-4.09c0 .17-.09.27-.23.27a.5.5 0 0 1-.16-.04l-9.93-5.78c-.11-.06-.14-.14-.14-.21 0-.08.03-.17.14-.21l9.93-5.78c.05-.03.11-.05.16-.05.14 0 .23.11.23.26Z" />
  </svg>
);
export default SvgBackwardendBold;
