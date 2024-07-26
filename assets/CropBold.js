import * as React from "react";
const SvgCropBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 6.853c0 .83.64 1.48 1.58 1.48h3.62v11.68c0 .68.46 1.14 1.13 1.14h11.77v3.82c0 .93.72 1.55 1.55 1.55.84 0 1.55-.62 1.55-1.55v-3.82h3.63c.94 0 1.58-.66 1.58-1.49s-.64-1.48-1.58-1.48h-3.63V6.503c0-.68-.45-1.12-1.13-1.12H8.302v-3.84c0-.92-.71-1.54-1.54-1.54-.84 0-1.56.62-1.56 1.54v3.84h-3.62c-.94 0-1.58.64-1.58 1.47m8.62 11.33c-.22 0-.32-.1-.32-.32v-9.53h9.49c.22 0 .31.1.31.33v9.52Z" />
  </svg>
);
export default SvgCropBold;
