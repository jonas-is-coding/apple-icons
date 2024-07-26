import * as React from "react";
const SvgArrowdowntolinecompactBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.622 18.356c-.92 0-1.62.71-1.62 1.64 0 .91.7 1.63 1.62 1.63h14.91c.93 0 1.63-.72 1.63-1.63 0-.93-.7-1.64-1.63-1.64h-7.12c.35-.07.68-.25.92-.5l7.04-6.8c.36-.36.53-.78.53-1.2 0-1-.69-1.68-1.61-1.68-.52 0-.92.24-1.22.54l-2.03 2-2.42 2.7.16-2.4v-9.26c0-1.05-.68-1.76-1.7-1.76s-1.7.71-1.7 1.76v9.26l.17 2.4-2.43-2.7-2.02-2c-.31-.31-.71-.54-1.21-.54-.93 0-1.62.68-1.62 1.68 0 .42.17.84.54 1.2l7.02 6.8c.24.25.57.43.93.5Z" />
  </svg>
);
export default SvgArrowdowntolinecompactBold;
