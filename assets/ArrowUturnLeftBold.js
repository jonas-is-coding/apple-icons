import * as React from "react";
const SvgArrowuturnleftBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M22.962 14.84c0-4.96-3.34-8.37-8.62-8.37h-6.54l-2.65.13 1.79-1.47 2.36-2.31c.32-.3.53-.68.53-1.2 0-.93-.66-1.62-1.64-1.62-.43 0-.88.19-1.22.53L.502 6.91c-.31.32-.5.8-.5 1.26 0 .47.19.94.5 1.25l6.47 6.39c.34.34.79.53 1.22.53.98 0 1.64-.7 1.64-1.62 0-.53-.21-.9-.53-1.21l-2.36-2.3-1.79-1.46 2.65.12h6.42c3.39 0 5.41 2.02 5.41 4.9 0 2.87-2.02 4.93-5.41 4.93h-2.77c-1 0-1.73.75-1.73 1.69 0 .95.74 1.7 1.73 1.7h3c5.21 0 8.51-3.24 8.51-8.25" />
  </svg>
);
export default SvgArrowuturnleftBold;
