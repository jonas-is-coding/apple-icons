import * as React from "react";
const SvgUcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-6.64c-2.96 0-4.99-1.65-4.99-4.15v-5.69c0-1.06.55-1.64 1.5-1.64.96 0 1.51.59 1.51 1.64v5.4c0 1.19.8 1.99 1.98 1.99 1.2 0 1.98-.8 1.98-1.99v-5.4c0-1.05.55-1.64 1.5-1.64.96 0 1.51.58 1.51 1.64v5.69c0 2.5-2.02 4.15-4.99 4.15" />
  </svg>
);
export default SvgUcirclefillBold;
