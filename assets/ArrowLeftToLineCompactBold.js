import * as React from "react";
const SvgArrowlefttolinecompactBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.282 16.549v-7.15c.06.36.25.69.49.94l6.8 7.02c.35.36.78.54 1.19.54 1 0 1.68-.7 1.68-1.62 0-.51-.22-.9-.54-1.22l-1.99-2.02-2.71-2.42 2.4.16h9.27c1.06 0 1.76-.69 1.76-1.7 0-1.02-.7-1.7-1.76-1.7h-9.27l-2.39.17 2.7-2.43 1.99-2.03c.32-.31.54-.71.54-1.21 0-.93-.68-1.62-1.68-1.62-.41 0-.84.17-1.19.54l-6.8 7.03c-.24.25-.43.56-.49.93v-7.13c0-.93-.73-1.63-1.64-1.63-.93 0-1.64.7-1.64 1.63v14.92c0 .91.71 1.62 1.64 1.62.91 0 1.64-.71 1.64-1.62" />
  </svg>
);
export default SvgArrowlefttolinecompactBold;
