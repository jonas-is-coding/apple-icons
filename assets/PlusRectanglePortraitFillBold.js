import * as React from "react";
const SvgPlusrectangleportraitfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 21.652c0 2.69 1.45 4.14 4.11 4.14h12.55c2.66 0 4.12-1.45 4.12-4.14V4.142c0-2.68-1.46-4.14-4.12-4.14H4.112c-2.66 0-4.11 1.46-4.11 4.14Zm4.65-8.75c0-.8.57-1.38 1.36-1.38h3v-3c0-.79.59-1.37 1.38-1.37.8 0 1.39.57 1.39 1.37v3h3.01c.77 0 1.36.58 1.36 1.38s-.59 1.37-1.36 1.37h-3.01v3.01c0 .79-.59 1.36-1.39 1.36-.79 0-1.38-.57-1.38-1.36v-3.01h-3c-.79 0-1.36-.57-1.36-1.37" />
  </svg>
);
export default SvgPlusrectangleportraitfillBold;
