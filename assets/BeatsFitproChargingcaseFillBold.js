import * as React from "react";
const SvgBeatsfitprochargingcasefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.062 9.249h9.04c.23-.52.74-.85 1.36-.85h16.91c.64 0 1.14.33 1.36.85h9.05c-.67-6.13-4.86-9.25-12.8-9.25h-12.13c-7.93 0-12.11 3.11-12.79 9.25m24.92 11.59c8.18 0 12.76-3.5 12.86-10.27h-9.14c-.24.48-.73.77-1.33.77h-16.91c-.6 0-1.09-.29-1.32-.77H.002c.08 6.69 4.83 10.27 12.85 10.27Zm-6.06-5.5c-.69.01-1.25-.57-1.25-1.24 0-.69.56-1.26 1.25-1.26s1.26.57 1.26 1.26c0 .64-.57 1.23-1.26 1.24" />
  </svg>
);
export default SvgBeatsfitprochargingcasefillBold;
