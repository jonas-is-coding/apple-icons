import * as React from "react";
const SvgMosaicfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.272.004c2.68 0 4.13 1.46 4.13 4.11v1.45h-5.55V.014h-2.89v13.97H.002v-9.87c0-2.66 1.46-4.11 4.14-4.11Zm-4.31 16.86v5.54h2.89v.01h-2.89v-.01h-5.52v-5.54Zm2.89-8.41h5.55v5.53h-5.55Zm1.42 13.95h-1.42v-5.54h5.55v1.44c0 2.65-1.45 4.1-4.13 4.1m-18.27-5.54h5.55v5.54h2.89v.01h-2.89v-.01h-1.41c-2.68 0-4.14-1.45-4.14-4.1Z" />
  </svg>
);
export default SvgMosaicfillBold;
