import * as React from "react";
const SvgTrainsiderearcarBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 15.676c0 2.61 1.31 3.91 3.95 3.91h22.77c2.63 0 3.95-1.3 3.95-3.91V3.906c0-2.61-1.32-3.91-3.95-3.91H6.892c-2.08 0-3.41 1.2-4.08 3.23l-2.32 7.04c-.42 1.27-.49 2.04-.49 2.99Zm12.87-6.13v-3.62c0-.62.37-.99.99-.99h9.68c.62 0 1.01.37 1.01.99v3.62c0 .61-.39 1-1.01 1h-9.68c-.62 0-.99-.39-.99-1m-7.07 1c-.68 0-1.01-.55-.73-1.41l1.1-3.35c.2-.58.46-.85 1.26-.85h1.11c.62 0 1 .37 1 .99v3.62c0 .61-.38 1-1 1Z" />
  </svg>
);
export default SvgTrainsiderearcarBold;
