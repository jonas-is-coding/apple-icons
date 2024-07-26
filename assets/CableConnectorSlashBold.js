import * as React from "react";
const SvgCableconnectorslashBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.016 4.215h4.86v-2.68c0-1.03-.5-1.53-1.54-1.53h-1.76c-1.05 0-1.56.5-1.56 1.53Zm11.19 19.97c.39.39 1.01.39 1.4 0 .37-.38.37-1.02 0-1.39L1.686 3.875c-.37-.37-1.02-.38-1.41 0-.37.38-.37 1.02 0 1.4Zm-4.62-9.63v-7.21c0-1.04-.5-1.56-1.53-1.56h-5.2c-.63 0-1.04.19-1.26.59v.2Zm-5.35 13.45h2.44v-9h.12l-5.48-5.48v3.05c0 1.03.5 1.53 1.54 1.53h1.38Z" />
  </svg>
);
export default SvgCableconnectorslashBold;
