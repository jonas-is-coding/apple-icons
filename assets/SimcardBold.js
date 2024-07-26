import * as React from "react";
const SvgSimcardBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 21.66c0 2.67 1.45 4.13 4.11 4.13h12.55c2.66 0 4.12-1.46 4.12-4.13V9.26c0-1.41-.4-2.46-1.25-3.3l-4.61-4.61C14.012.42 12.902 0 11.412 0h-7.3C1.452 0 .002 1.46.002 4.14Zm3.02-.34V4.46c0-.93.46-1.44 1.45-1.44h6.94c.85 0 1.56.31 2.14.88l3.6 3.65c.41.42.6.93.6 1.68v12.09c0 .95-.45 1.45-1.45 1.45H4.472c-.99 0-1.45-.5-1.45-1.45m1.96-7.26h3.55c.56 0 .9.35.9.9v6.11h2.08V10.79h-4.95c-.96 0-1.58.62-1.58 1.6Zm8.2 7.01h1.06c.95 0 1.57-.61 1.57-1.58v-7.1c0-.98-.62-1.6-1.57-1.6h-1.06Zm-8.2-1.58c0 .97.62 1.58 1.58 1.58h1.21v-5.1c0-.15-.1-.24-.25-.24h-2.54Z" />
  </svg>
);
export default SvgSimcardBold;
