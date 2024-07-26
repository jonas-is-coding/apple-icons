import * as React from "react";
const SvgLocationnorthcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-5.12-4.83c-.44 1.13.73 1.79 1.55.96l3.27-3.26c.17-.18.41-.18.58 0l3.27 3.26c.82.83 2 .17 1.55-.96l-4.05-10.3c-.39-.99-1.72-.98-2.11.01Z" />
  </svg>
);
export default SvgLocationnorthcircleBold;
