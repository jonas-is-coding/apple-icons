import * as React from "react";
const SvgBolthorizontalBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.549 11.611c-1.46 1.82.25 3.75 2.2 2.7l8.38-4.6 9.16 5.08c.57.33 1.11.48 1.61.48.79 0 1.5-.39 2.14-1.17l8.41-10.44c1.37-1.7-.19-3.8-2.21-2.71l-8.38 4.59-9.16-5.06c-.58-.32-1.12-.48-1.63-.48-.78 0-1.48.39-2.12 1.17Zm3.42-.44c-.13.08-.23-.05-.13-.17l7.16-8.05c.16-.17.3-.2.49-.1l10.08 5.56c.42.23.54.18.88-.04l6.59-4.28c.11-.08.23.05.13.16l-7.18 8.15c-.16.17-.3.2-.49.09l-10.09-5.5c-.41-.22-.53-.15-.87.05Z" />
  </svg>
);
export default SvgBolthorizontalBold;
