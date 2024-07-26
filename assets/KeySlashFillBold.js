import * as React from "react";
const SvgKeyslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15.84 15.075c2.96-1.61 4.6-4.17 4.6-7.13 0-4.39-3.55-7.95-7.96-7.95-3.2 0-5.92 1.86-7.16 4.55ZM.28 4.765l21.85 21.84c.4.39 1.03.37 1.4 0a1 1 0 0 0 0-1.39L1.68 3.385c-.4-.39-1.03-.39-1.4-.01-.38.37-.37 1.03 0 1.39m12.2 2.27c-1.08 0-1.96-.88-1.96-1.97s.87-1.96 1.96-1.96 1.96.88 1.96 1.96c0 1.09-.87 1.97-1.96 1.97m.83 22.32 3.56-3.56c.23-.25.22-.58 0-.82l-2.34-2.31.58-.6-5.86-5.85v10.05c0 .42.14.83.48 1.13l2.14 2c.36.34 1 .38 1.44-.04" />
  </svg>
);
export default SvgKeyslashfillBold;
