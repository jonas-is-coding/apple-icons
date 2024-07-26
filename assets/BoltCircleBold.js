import * as React from "react";
const SvgBoltcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-4.97-8.55c0 .35.3.61.65.61h3.64l-1.94 5.12c-.32.84.6 1.33 1.17.65l6.14-7.51c.14-.16.21-.35.21-.53 0-.33-.28-.59-.64-.59h-3.64l1.94-5.12c.31-.86-.6-1.35-1.17-.66l-6.15 7.51c-.12.15-.21.34-.21.52" />
  </svg>
);
export default SvgBoltcircleBold;
