import * as React from "react";
const SvgAppconnectedtoappbelowfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.182.604c-.49-.48-1.15-.6-2.09-.6h-3.41c-.94 0-1.59.12-2.08.6-.48.5-.6 1.13-.6 2.08v3.41c0 .95.12 1.6.6 2.07.49.48 1.14.62 2.08.62h.25c0 2.76 1.63 4.62 4.73 5.4l5.96 1.51c1.74.44 2.64 1.33 2.67 2.6h-.28c-.94 0-1.6.13-2.09.61-.48.49-.6 1.12-.6 2.07v3.41c0 .95.12 1.6.6 2.08.49.48 1.14.62 2.09.62h3.41c.93 0 1.59-.14 2.08-.62.48-.48.6-1.13.6-2.08v-3.41c0-.95-.12-1.59-.6-2.07-.49-.48-1.15-.61-2.08-.61h-.23c0-2.74-1.61-4.62-4.73-5.38l-5.95-1.51c-1.74-.45-2.65-1.34-2.68-2.62h.26c.94 0 1.6-.14 2.09-.62.48-.47.61-1.12.61-2.07v-3.4c0-.96-.13-1.59-.61-2.09" />
  </svg>
);
export default SvgAppconnectedtoappbelowfillBold;
