import * as React from "react";
const SvgFrancsigncircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-1.78-3.99c.63 0 1.07-.44 1.07-1.09v-.72h2.45c.18 0 .34-.15.34-.34 0-.2-.16-.34-.34-.34h-2.45v-1.84h3.28c.54 0 .9-.34.9-.83 0-.5-.36-.84-.9-.84h-3.28v-2.57h3.6c.57 0 .94-.34.94-.87s-.37-.88-.94-.88h-4.67c-.68 0-1.06.43-1.06 1.12v6.71h-1.12c-.19 0-.34.14-.34.34 0 .19.15.34.34.34h1.12v.72c0 .65.42 1.09 1.06 1.09" />
  </svg>
);
export default SvgFrancsigncircleBold;
