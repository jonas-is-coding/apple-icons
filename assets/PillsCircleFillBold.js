import * as React from "react";
const SvgPillscirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-.2-12.38-3.72-3.73 1.68-1.71c1.18-1.17 2.7-1.18 3.81-.06 1.13 1.09 1.12 2.64-.04 3.8Zm-.75.76-1.72 1.73c-1.16 1.16-2.69 1.17-3.81.08-1.1-1.12-1.08-2.64.08-3.81l1.72-1.74Zm7.84 1.47h-6.47a3.28 3.28 0 0 1 3.23-2.74c1.64 0 2.99 1.19 3.24 2.74m0 1.05a3.275 3.275 0 0 1-3.24 2.74c-1.62 0-2.98-1.2-3.23-2.74Z" />
  </svg>
);
export default SvgPillscirclefillBold;
