import * as React from "react";
const SvgPencilcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m4.5-12.21.83-.83c.45-.45.47-1.01.05-1.42l-.3-.3c-.42-.43-.99-.4-1.42.04l-.83.84Zm-7.88 7.88 7.18-7.16-1.7-1.69-7.16 7.17-.62 1.57c-.18.46.26.87.69.72Z" />
  </svg>
);
export default SvgPencilcircleBold;
