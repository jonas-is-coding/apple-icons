import * as React from "react";
const SvgPenciltipcropcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-.92-17.69-2 5.52c-.67.06-1.23.62-1.41 1.31l-1.44 5.77a9.25 9.25 0 0 1-3.52-7.28c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 2.94-1.36 5.57-3.5 7.26l-1.45-5.74c-.19-.7-.73-1.26-1.41-1.32l-1.99-5.52c-.31-.88-1.56-.89-1.87 0m.92 14.61c-1.34 0-2.63-.29-3.79-.81l1.53-6.22h4.55l1.53 6.22c-1.17.52-2.46.81-3.82.81" />
  </svg>
);
export default SvgPenciltipcropcircleBold;
