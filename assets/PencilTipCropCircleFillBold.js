import * as React from "react";
const SvgPenciltipcropcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-2.28-10.11-1.22 5.09c-.39 1.46-2.51.91-2.11-.59l1.28-5.25c.17-.68.71-1.23 1.39-1.31h.04l1.98-5.52c.31-.89 1.54-.88 1.87 0l1.97 5.52h.05c.67.08 1.2.63 1.38 1.32l1.29 5.24c.41 1.52-1.76 2.03-2.12.59l-1.21-5.09Z" />
  </svg>
);
export default SvgPenciltipcropcirclefillBold;
