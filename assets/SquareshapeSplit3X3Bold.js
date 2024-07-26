import * as React from "react";
const SvgSquareshapesplit3X3Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 21.284c0 .68.44 1.12 1.12 1.12h20.16c.68 0 1.12-.44 1.12-1.12V1.124c0-.68-.44-1.12-1.12-1.12H1.122c-.68 0-1.12.44-1.12 1.12Zm3.02-17.94c0-.22.11-.32.33-.32h3.2v3.55h-3.53Zm6.41 3.23v-3.55h3.54v3.55Zm9.62-3.55c.23 0 .33.1.33.32v3.23h-3.53v-3.55Zm-16.03 9.96v-3.54h3.53v3.54Zm6.41 0v-3.54h3.54v3.54Zm6.42 0v-3.54h3.53v3.54Zm-12.83 6.07v-3.19h3.53v3.52h-3.2q-.33 0-.33-.33m6.41.33v-3.52h3.54v3.52Zm9.95-.33c0 .22-.1.33-.33.33h-3.2v-3.52h3.53Z" />
  </svg>
);
export default SvgSquareshapesplit3X3Bold;
