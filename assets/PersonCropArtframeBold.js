import * as React from "react";
const SvgPersoncropartframeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 24.672c0 .68.44 1.12 1.12 1.12h18.53c.68 0 1.13-.44 1.13-1.12V1.142c0-.68-.45-1.14-1.13-1.14H1.122c-.68 0-1.12.46-1.12 1.14Zm2.88-2.09V3.212c0-.21.11-.32.33-.32h14.35c.23 0 .33.11.33.32v19.37c0 .22-.1.33-.33.33H3.212q-.33 0-.33-.33m1.1-1.3c0 .35.18.54.51.54h11.8c.33 0 .51-.19.51-.54V4.512c0-.35-.18-.53-.51-.53h-11.8c-.33 0-.51.18-.51.53Zm6.4-5.6c-2.52 0-4.17 1.24-5.06 2.47V5.542c0-.14.08-.21.21-.21h9.71c.15 0 .22.07.22.21v12.63c-.9-1.25-2.55-2.49-5.08-2.49m0-.88c1.64.01 2.97-1.38 2.97-3.24 0-1.73-1.33-3.16-2.97-3.16s-2.96 1.43-2.96 3.16c0 1.86 1.32 3.24 2.96 3.24" />
  </svg>
);
export default SvgPersoncropartframeBold;
