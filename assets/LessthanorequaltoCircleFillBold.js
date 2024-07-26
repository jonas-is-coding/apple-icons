import * as React from "react";
const SvgLessthanorequaltocirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m2.72-10.18c-.17 0-.36-.05-.62-.16l-5.94-2.7c-.63-.29-.92-.68-.92-1.26s.29-1.02.92-1.32l5.94-2.69c.26-.12.45-.15.62-.15.72 0 1.17.63 1.17 1.19 0 .43-.27.84-.72 1.06l-4.26 1.87v.04l4.26 1.86c.45.2.72.61.72 1.07 0 .53-.45 1.19-1.17 1.19m-7.55 2.7c0-.67.52-1.19 1.24-1.19h6.71c.7 0 1.23.52 1.23 1.19 0 .63-.53 1.14-1.23 1.14h-6.71c-.72 0-1.24-.51-1.24-1.14" />
  </svg>
);
export default SvgLessthanorequaltocirclefillBold;
