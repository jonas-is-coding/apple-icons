import * as React from "react";
const SvgBitcoinsignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.222 23.674h1.69v2.34c0 .4.31.71.71.71.39 0 .7-.31.7-.71v-2.34h2.3v2.34c0 .4.3.71.7.71.39 0 .68-.31.68-.71v-2.35c3.84-.07 6.98-1.94 6.98-5.85 0-2.8-2.18-4.81-4.99-5.01v-.12c2.27-.36 3.98-2.21 3.98-4.53 0-3.24-2.57-4.98-5.97-5.12V.694c0-.4-.29-.69-.68-.69-.4 0-.7.29-.7.69v2.34h-2.3V.694c0-.4-.31-.69-.7-.69-.4 0-.71.29-.71.69v2.34h-1.69c-1.34 0-2.22.81-2.22 2.27v16.08c0 1.39.78 2.29 2.22 2.29m1.86-11.99v-5.64h3.45c1.93 0 3.44.85 3.44 2.73 0 2.08-1.77 2.91-3.83 2.91Zm0 8.96v-6.25h3.59c2.34 0 4.16.82 4.16 3.1s-1.71 3.15-4.04 3.15Z" />
  </svg>
);
export default SvgBitcoinsignBold;
