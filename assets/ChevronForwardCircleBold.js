import * as React from "react";
const SvgChevronforwardcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-2.56-3.56c.39.39 1.22.37 1.64-.02l4.59-4.32c.79-.72.79-2.02 0-2.76l-4.59-4.3a1.19 1.19 0 0 0-1.62-.04c-.48.46-.49 1.23-.02 1.67l4.33 4.05-4.33 4.06c-.46.43-.5 1.18 0 1.66" />
  </svg>
);
export default SvgChevronforwardcircleBold;
