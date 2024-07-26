import * as React from "react";
const SvgCheckmarkrectanglestackfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.842 1.748h14.94c-.09-1.13-.8-1.75-1.99-1.75H6.832c-1.19 0-1.9.62-1.99 1.75m-2.35 3.62h19.63c-.15-1.2-.81-1.9-2.18-1.9H4.662c-1.37 0-2.01.7-2.17 1.9m1.5 21.71h16.62c2.59 0 4-1.4 4-3.97v-11.83c0-2.56-1.41-3.97-4-3.97H3.992c-2.59 0-3.99 1.41-3.99 3.97v11.83c0 2.57 1.4 3.97 3.99 3.97m7.02-4c-.51 0-.93-.24-1.31-.69l-2.74-3.29c-.27-.32-.39-.62-.39-.96 0-.72.59-1.3 1.32-1.3.42 0 .73.17 1.05.55l2.05 2.51 4.56-7.27c.32-.49.69-.73 1.16-.73.7 0 1.34.51 1.34 1.24 0 .29-.12.62-.32.91l-5.45 8.32c-.31.45-.75.71-1.27.71" />
  </svg>
);
export default SvgCheckmarkrectanglestackfillBold;
