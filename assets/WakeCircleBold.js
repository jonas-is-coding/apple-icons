import * as React from "react";
const SvgWakecircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m0-15.98c-3.68 0-6.68 3-6.68 6.68a6.68 6.68 0 1 0 6.68-6.68m-3.4 3.7a4.5 4.5 0 0 1 3.41-1.57c1.36 0 2.58.61 3.4 1.57Zm-1.13 2.98c0-.39.06-.76.19-1.13h8.71c.12.37.19.74.19 1.13a4.545 4.545 0 0 1-9.09 0" />
  </svg>
);
export default SvgWakecircleBold;
