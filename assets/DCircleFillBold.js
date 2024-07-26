import * as React from "react";
const SvgDcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.01-6.9c-1.09 0-1.64-.62-1.64-1.74v-7.55c0-1.11.55-1.75 1.64-1.75h3.07c3.45 0 5.36 1.98 5.36 5.51 0 3.55-1.94 5.53-5.36 5.53Zm1.27-2.27h1.33c1.84 0 2.74-1.02 2.74-3.25 0-2.17-.91-3.24-2.74-3.24h-1.33Z" />
  </svg>
);
export default SvgDcirclefillBold;
