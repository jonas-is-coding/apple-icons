import * as React from "react";
const SvgDiamondcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-6.06-11.28c-.66-.68-.68-1.49-.02-2.15l5.02-5.02c.66-.66 1.46-.65 2.14.02l4.98 4.98c.67.68.69 1.48.02 2.16l-5.01 5.01c-.68.66-1.48.65-2.16-.02Z" />
  </svg>
);
export default SvgDiamondcirclefillBold;
