import * as React from "react";
const SvgDotsquareshapesplit2X2Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 21.284c0 .68.44 1.12 1.12 1.12h20.16c.68 0 1.12-.44 1.12-1.12V1.124c0-.68-.44-1.12-1.12-1.12H1.122c-.68 0-1.12.44-1.12 1.12Zm3.02-2.23v-6.4h3.13c-.15-.45-.25-.95-.25-1.46 0-.49.09-.98.24-1.42h-3.12v-6.43c0-.22.11-.32.33-.32h6.41v3.14c.46-.15.95-.23 1.45-.23s.99.08 1.43.22v-3.13h6.41c.23 0 .33.1.33.32v6.43h-3.1c.15.44.23.93.23 1.42 0 .51-.09 1.01-.23 1.46h3.1v6.4c0 .22-.1.33-.33.33h-6.41v-3.11c-.44.16-.93.24-1.43.24s-.99-.1-1.45-.24v3.11h-6.41q-.33 0-.33-.33m8.19-4.31c1.94 0 3.53-1.58 3.53-3.54 0-1.93-1.59-3.52-3.53-3.52s-3.54 1.59-3.54 3.52c0 1.96 1.6 3.54 3.54 3.54" />
  </svg>
);
export default SvgDotsquareshapesplit2X2Bold;
