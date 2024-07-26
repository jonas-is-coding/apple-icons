import * as React from "react";
const SvgWcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.1-6.65c-.92 0-1.46-.46-1.64-1.39l-1.91-8.44c-.05-.14-.05-.26-.05-.39 0-.73.5-1.24 1.25-1.24s1.19.41 1.32 1.29l1.21 6.61h.11l1.5-6.73c.15-.72.57-1.06 1.3-1.06.74 0 1.16.37 1.31 1.07l1.49 6.72h.12l1.23-6.61c.13-.88.55-1.29 1.3-1.29.76 0 1.25.51 1.25 1.24 0 .13 0 .25-.04.39l-1.91 8.44c-.2.93-.74 1.39-1.66 1.39-.86 0-1.45-.48-1.64-1.41l-1.39-5.93h-.11l-1.39 5.93c-.2.93-.77 1.41-1.65 1.41" />
  </svg>
);
export default SvgWcirclefillBold;
