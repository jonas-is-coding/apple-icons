import * as React from "react";
const SvgEnvelopefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M14.712 11.463c.34 0 .64-.13 1.01-.46L27.532.493c-.64-.34-1.34-.49-2.24-.49H4.142c-.91 0-1.61.15-2.24.49l11.8 10.51c.37.33.68.46 1.01.46m-14.43 7.37 8.75-8.73-8.74-7.79c-.16.39-.29 1.02-.29 1.8v12.96c0 .72.1 1.28.28 1.76m28.86 0c.18-.48.28-1.04.28-1.76V4.113c0-.78-.12-1.41-.29-1.8l-8.74 7.79Zm-25.19 2.35h21.52c.86 0 1.56-.17 2.09-.46l-9-9-1.42 1.25c-.79.71-1.54 1.04-2.43 1.04-.88 0-1.63-.33-2.44-1.04l-1.41-1.25-9.01 9c.53.29 1.23.46 2.1.46" />
  </svg>
);
export default SvgEnvelopefillBold;
