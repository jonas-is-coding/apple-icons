import * as React from "react";
const SvgGaugewithneedleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m0-7.17c1.17 0 2.14-.95 2.14-2.12 0-.72-.37-1.38-.99-1.79l-5.17-3.44c-.85-.55-1.65.26-1.11 1.12l3.28 5.15c.41.67 1.09 1.08 1.85 1.08" />
  </svg>
);
export default SvgGaugewithneedleBold;
