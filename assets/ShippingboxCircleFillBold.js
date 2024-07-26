import * as React from "react";
const SvgShippingboxcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m3.62-14.91-5.89-3.24 1.07-.57c.38-.21.79-.33 1.2-.33.4 0 .81.12 1.21.33l4.21 2.31c.16.09.3.17.41.28Zm-3.62 1.98-5.82-3.2c.1-.11.24-.19.4-.28l2.13-1.18 5.85 3.26Zm.49 7.24v-6.35l5.77-3.2c.02.1.02.2.02.33v5.01c0 .85-.29 1.22-.92 1.57l-4.62 2.54c-.08.04-.16.08-.25.1m-.99 0c-.08-.02-.17-.06-.25-.1l-4.61-2.54c-.64-.35-.92-.72-.92-1.57v-5.01c0-.13 0-.23.02-.33l5.76 3.2Z" />
  </svg>
);
export default SvgShippingboxcirclefillBold;
