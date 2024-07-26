import * as React from "react";
const SvgCheckmarkmessagefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.812 26.04c1.47 0 4.77-1.43 7.09-3.06.27-.18.47-.23.71-.23.14.01.25.01.34.01 8.48-.01 15.17-4.35 15.17-11.38 0-6.31-6.26-11.38-14.06-11.38S.002 5.07.002 11.38c0 3.8 2.2 7.29 6.19 9.47.28.15.34.33.19.59-.72 1.22-1.82 2.48-2.3 3.1-.63.77-.26 1.5.73 1.5m7.95-8.71c-.52 0-.94-.24-1.3-.69l-2.76-3.28c-.26-.33-.37-.63-.37-.97 0-.73.59-1.3 1.3-1.3.42 0 .75.16 1.07.55l2.04 2.5 4.57-7.25c.3-.49.69-.74 1.14-.74.71 0 1.35.51 1.35 1.23 0 .3-.13.62-.33.93l-5.44 8.31c-.31.45-.75.71-1.27.71" />
  </svg>
);
export default SvgCheckmarkmessagefillBold;
