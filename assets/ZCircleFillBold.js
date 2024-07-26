import * as React from "react";
const SvgZcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.15-6.9c-.82 0-1.37-.54-1.37-1.3 0-.49.15-.83.56-1.34l4.54-5.85v-.13h-3.92c-.82 0-1.34-.45-1.34-1.21 0-.75.51-1.21 1.34-1.21h6.31c.81 0 1.38.54 1.38 1.32 0 .53-.12.8-.55 1.32l-4.55 5.86v.13h4.1c.85 0 1.36.43 1.36 1.19 0 .75-.52 1.22-1.36 1.22Z" />
  </svg>
);
export default SvgZcirclefillBold;
