import * as React from "react";
const SvgMenucardfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m6.982 1.401 9.58 1.69c1.17.21 2.13.54 2.93.98l-.02-.55c-.12-2.65-2.13-3.95-5.25-3.4Zm-4.2 23.63 13.1 2.3c2.72.5 4.45-1.11 4.45-4.06V9.121c0-2.72-1.25-3.86-4.07-4.37l-12.69-2.24c-2.08-.36-3.57.89-3.57 2.99v16.3c0 1.77.98 2.91 2.78 3.23m2.71-14.65c-.53-.08-.85-.49-.85-1.06 0-.67.54-1.11 1.26-.99l8.59 1.52c.57.11.87.46.87 1.04 0 .68-.51 1.15-1.22 1.02Zm0 4.97c-.51-.09-.85-.5-.85-1.05 0-.66.54-1.11 1.26-.98l8.59 1.51c.57.11.87.45.87 1.03 0 .68-.51 1.15-1.22 1.03Z" />
  </svg>
);
export default SvgMenucardfillBold;
