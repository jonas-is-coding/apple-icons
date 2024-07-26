import * as React from "react";
const SvgCheckmarksquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m5.84-5.32c-.52 0-.93-.23-1.31-.69l-2.74-3.28c-.27-.33-.39-.62-.39-.96 0-.73.59-1.3 1.31-1.3.43 0 .74.16 1.06.54l2.05 2.52 4.56-7.27c.31-.49.69-.74 1.15-.74.71 0 1.34.52 1.34 1.24 0 .3-.11.61-.32.92l-5.44 8.32c-.31.44-.76.7-1.27.7" />
  </svg>
);
export default SvgCheckmarksquarefillBold;
