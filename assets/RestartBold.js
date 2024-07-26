import * as React from "react";
const SvgRestartBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17.37 21.624c1.09 0 1.98-.85 1.98-2.25V2.234c0-1.4-.89-2.23-1.98-2.23-.55 0-1.05.16-1.69.54L1.62 8.694C.54 9.324 0 9.904 0 10.804c0 .91.54 1.49 1.62 2.11l14.06 8.16c.64.37 1.14.55 1.69.55m-1.3-3.95c-.04 0-.07-.01-.13-.05l-11.63-6.7c-.04-.04-.08-.06-.08-.12 0-.05.04-.08.08-.12l11.63-6.71c.06-.02.09-.05.13-.05.07 0 .1.05.1.13v13.5c0 .07-.03.12-.1.12" />
  </svg>
);
export default SvgRestartBold;
