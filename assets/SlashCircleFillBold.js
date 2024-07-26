import * as React from "react";
const SvgSlashcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-4.08-6.89c-.77 0-1.35-.62-1.35-1.38 0-.39.15-.74.46-1.04l8-8.06c.3-.32.64-.47 1.03-.47.76 0 1.38.59 1.38 1.38 0 .37-.15.73-.46 1.03l-8 8.06c-.31.32-.63.48-1.06.48" />
  </svg>
);
export default SvgSlashcirclefillBold;
