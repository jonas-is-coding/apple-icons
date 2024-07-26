import * as React from "react";
const SvgArrowrightcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m6.16-12.38c0 .38-.12.74-.49 1.11l-3.79 3.95c-.24.23-.49.37-.86.37-.68 0-1.16-.57-1.16-1.19 0-.35.15-.69.4-.93l1.56-1.46.88-.58-1.78.13h-5.83c-.74 0-1.37-.62-1.37-1.4 0-.79.63-1.4 1.37-1.4h5.83l1.78.12-.88-.57-1.56-1.47c-.25-.23-.4-.55-.4-.9 0-.63.48-1.21 1.16-1.21.37 0 .62.13.86.38l3.79 3.95c.37.37.49.72.49 1.1" />
  </svg>
);
export default SvgArrowrightcirclefillBold;
