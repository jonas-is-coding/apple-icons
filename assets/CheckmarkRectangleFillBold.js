import * as React from "react";
const SvgCheckmarkrectanglefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m8.56-5.32c-.53 0-.94-.23-1.31-.69l-2.75-3.28c-.27-.33-.38-.62-.38-.96 0-.73.59-1.3 1.3-1.3.42 0 .75.16 1.07.55l2.04 2.51 4.57-7.27c.3-.49.69-.74 1.15-.74.7 0 1.34.52 1.34 1.25 0 .29-.11.62-.33.91l-5.43 8.32c-.31.45-.76.7-1.27.7" />
  </svg>
);
export default SvgCheckmarkrectanglefillBold;
