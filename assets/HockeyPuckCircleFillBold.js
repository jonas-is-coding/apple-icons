import * as React from "react";
const SvgHockeypuckcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-11.37c-3.58 0-6.43-1.32-6.43-3.04 0-1.69 2.85-2.98 6.43-2.98 3.59 0 6.45 1.29 6.45 2.98 0 1.72-2.86 3.04-6.45 3.04m0 4c-3.61 0-6.43-1.64-6.43-3.72v-1.33c1.25 1.27 3.74 1.96 6.43 1.96 2.7 0 5.18-.69 6.45-1.96v1.33c0 2.08-2.84 3.72-6.45 3.72" />
  </svg>
);
export default SvgHockeypuckcirclefillBold;
