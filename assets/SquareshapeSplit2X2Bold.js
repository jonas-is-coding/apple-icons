import * as React from "react";
const SvgSquareshapesplit2X2Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 21.284c0 .68.44 1.12 1.12 1.12h20.16c.68 0 1.12-.44 1.12-1.12V1.124c0-.68-.44-1.12-1.12-1.12H1.122c-.68 0-1.12.44-1.12 1.12Zm3.35-18.26h6.41v6.75h-6.74v-6.43c0-.22.11-.32.33-.32m9.29 6.75v-6.75h6.41c.23 0 .33.1.33.32v6.43Zm6.41 9.61h-6.41v-6.73h6.74v6.4c0 .22-.1.33-.33.33m-16.03-.33v-6.4h6.74v6.73h-6.41q-.33 0-.33-.33" />
  </svg>
);
export default SvgSquareshapesplit2X2Bold;
