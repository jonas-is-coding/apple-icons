import * as React from "react";
const SvgPowercirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m.01-11.9c-.65 0-1.11-.47-1.11-1.15v-4.81c0-.68.46-1.16 1.11-1.16s1.11.48 1.11 1.16v4.81c0 .68-.46 1.15-1.11 1.15m0 5.82c-3.44 0-6.29-2.85-6.29-6.29 0-1.64.68-3.26 1.83-4.37a1.05 1.05 0 0 1 1.52 1.44c-.78.78-1.22 1.82-1.22 2.93 0 2.32 1.86 4.17 4.16 4.17 2.31 0 4.16-1.85 4.16-4.17 0-1.11-.44-2.15-1.23-2.93-1.03-1.11.5-2.52 1.53-1.44 1.16 1.11 1.84 2.74 1.84 4.37 0 3.44-2.85 6.29-6.3 6.29" />
  </svg>
);
export default SvgPowercirclefillBold;
