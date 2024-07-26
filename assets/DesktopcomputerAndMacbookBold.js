import * as React from "react";
const SvgDesktopcomputerandmacbookBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.602 25.255h4.26c-.19-.39-.3-.81-.3-1.27 0-1.65 1.38-3.02 3.04-3.02h.18v-5.95H3.362c-.33 0-.48-.13-.48-.47v-10.9c0-.47.29-.76.76-.76h22.06c.47 0 .75.29.75.76v4.02h2.89v-4.34c0-2.08-1.24-3.33-3.33-3.33h-22.7c-2.07 0-3.31 1.25-3.31 3.33v14.24c0 2.08 1.24 3.32 3.31 3.32h7.33v1.85h-.04c-.7 0-1.26.59-1.26 1.26s.56 1.26 1.26 1.26m5.73-1.27c0 .68.57 1.27 1.27 1.27h25.25c.71 0 1.27-.6 1.27-1.27 0-.66-.56-1.26-1.27-1.26h-1.99v-9.96c0-2.14-1.21-3.33-3.34-3.33h-14.63c-2.09 0-3.34 1.19-3.34 3.33v9.97h-1.95c-.7 0-1.27.59-1.27 1.25m6.1-1.25v-9.38c0-.72.35-1.04 1.04-1.04h13.47c.69 0 1.03.32 1.03 1.04v9.37Z" />
  </svg>
);
export default SvgDesktopcomputerandmacbookBold;
