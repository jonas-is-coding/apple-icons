import * as React from "react";
const SvgMusicnotetvfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.622 20.88h23.19c2.33 0 3.62-1.25 3.62-3.62V3.62c0-2.35-1.29-3.62-3.62-3.62H3.622C1.292 0 .002 1.27.002 3.62v13.64c0 2.37 1.29 3.62 3.62 3.62m15.09-12.34-2.79.68c-.22.06-.29.13-.29.52v3.72c0 1.79-1.21 3.05-2.96 3.05-1.25 0-2.07-.76-2.07-1.84 0-1.16.86-1.89 2.07-2.2l1.07-.28c.56-.14.59-.2.59-.69V6.48c0-.75.14-.91.79-1.07l3.5-.88c.67-.16.91.06.91.6v2.36c0 .72-.17.9-.82 1.05m-9.66 16.67h12.34c.7 0 1.26-.59 1.26-1.26 0-.68-.56-1.26-1.26-1.26H9.052c-.71 0-1.28.58-1.28 1.26 0 .67.57 1.26 1.28 1.26" />
  </svg>
);
export default SvgMusicnotetvfillBold;
