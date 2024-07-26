import * as React from "react";
const SvgBackwardframeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M22.702 19.706c1.03 0 1.78-.73 1.78-1.73V1.726c0-.99-.75-1.73-1.78-1.73s-1.78.74-1.78 1.73v16.25c0 1 .75 1.73 1.78 1.73m-5.08-2.18V2.176c0-1.45-.89-2.18-1.94-2.18-.46 0-.93.12-1.38.39l-12.77 7.43c-.99.57-1.53 1.15-1.53 2.04 0 .88.54 1.45 1.53 2.03l12.77 7.44c.45.26.92.38 1.38.38 1.05 0 1.94-.73 1.94-2.18m-3.02-1.91c0 .17-.11.27-.23.27a.4.4 0 0 1-.16-.04l-9.93-5.78c-.11-.06-.14-.14-.14-.21 0-.08.03-.17.14-.21l9.93-5.78c.05-.03.1-.05.16-.05.12 0 .23.11.23.26Z" />
  </svg>
);
export default SvgBackwardframeBold;
