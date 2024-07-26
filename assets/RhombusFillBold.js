import * as React from "react";
const SvgRhombusfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.62 24.865c.92 0 1.41-.63 2.15-1.61l6.84-9.13c.45-.61.63-1.14.63-1.69s-.18-1.09-.63-1.69l-6.84-9.13c-.74-.98-1.23-1.61-2.15-1.61s-1.4.63-2.14 1.61l-6.85 9.13c-.45.6-.63 1.14-.63 1.69s.18 1.08.63 1.69l6.85 9.13c.74.98 1.22 1.61 2.14 1.61" />
  </svg>
);
export default SvgRhombusfillBold;
