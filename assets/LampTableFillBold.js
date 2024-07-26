import * as React from "react";
const SvgLamptablefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.642 29.343h3.5c3.33 0 5.16-1.58 5.16-4.48 0-1.68-.54-4.19-1.47-6.71-.56-1.57-1.79-2.46-3.49-2.46h-.58v-1.28c2.18-.05 4.26-.2 6.02-.47 1.82-.27 2.47-1.61 1.68-3.42l-3.47-7.84c-.81-1.83-2.15-2.68-4.18-2.68h-2.83c-2.04 0-3.36.85-4.17 2.68l-3.48 7.84c-.79 1.81-.14 3.15 1.68 3.42 1.76.27 3.85.42 6.03.47v1.28h-.6c-1.7 0-2.93.89-3.49 2.46-.92 2.51-1.46 5.03-1.46 6.71 0 2.9 1.83 4.48 5.15 4.48" />
  </svg>
);
export default SvgLamptablefillBold;
