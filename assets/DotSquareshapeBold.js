import * as React from "react";
const SvgDotsquareshapeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 21.284c0 .68.44 1.12 1.12 1.12h20.16c.68 0 1.12-.44 1.12-1.12V1.124c0-.68-.44-1.12-1.12-1.12H1.122c-.68 0-1.12.44-1.12 1.12Zm3.02-2.23V3.344c0-.22.11-.32.33-.32h15.7c.23 0 .33.1.33.32v15.71c0 .22-.1.33-.33.33h-15.7q-.33 0-.33-.33m8.19-4.1a3.75 3.75 0 0 0 3.74-3.75c0-2.08-1.67-3.75-3.74-3.75s-3.75 1.67-3.75 3.75c0 2.06 1.68 3.75 3.75 3.75" />
  </svg>
);
export default SvgDotsquareshapeBold;
