import * as React from "react";
const SvgSumBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.452 21.572h10.27c1.12 0 1.81-.65 1.81-1.65 0-1.01-.69-1.66-1.81-1.66h-8.2v-.15l5.33-5.53c.6-.52.92-1.17.92-1.82 0-.67-.32-1.33-.92-1.86l-5.33-5.45v-.14h8.22c1.11 0 1.79-.66 1.79-1.66s-.68-1.65-1.79-1.65H2.452c-1.57 0-2.44 1.11-2.44 2.34 0 .74.33 1.54 1.02 2.12l6.14 6.18v.16l-6.15 6.31c-.69.58-1.02 1.38-1.02 2.12 0 1.23.87 2.34 2.45 2.34" />
  </svg>
);
export default SvgSumBold;
