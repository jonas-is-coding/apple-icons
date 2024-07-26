import * as React from "react";
const SvgCheckmarkrectangleportraitBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 21.652c0 2.69 1.45 4.14 4.11 4.14h12.55c2.66 0 4.12-1.45 4.12-4.14V4.142c0-2.68-1.46-4.14-4.12-4.14H4.112c-2.66 0-4.11 1.46-4.11 4.14Zm3.02-.32V4.472c0-.94.46-1.45 1.45-1.45h11.83c1 0 1.45.51 1.45 1.45v16.86c0 .93-.45 1.44-1.45 1.44H4.472c-.99 0-1.45-.51-1.45-1.44m6.15-2.86c.48 0 .91-.25 1.19-.67l5.04-7.77c.18-.28.3-.57.3-.86 0-.69-.61-1.17-1.26-1.17-.44 0-.8.24-1.09.71l-4.21 6.77-1.95-2.4c-.3-.37-.61-.52-1-.52-.68 0-1.23.54-1.23 1.22 0 .33.11.61.36.91l2.61 3.13c.35.42.74.65 1.24.65" />
  </svg>
);
export default SvgCheckmarkrectangleportraitBold;
