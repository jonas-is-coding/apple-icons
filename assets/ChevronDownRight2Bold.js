import * as React from "react";
const SvgChevrondownright2Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.922 12.71c-1.23 0-1.92.91-1.92 1.86 0 .98.69 1.86 1.92 1.86h12.38c1.27 0 2.19-.92 2.19-2.18V1.92c0-1.23-.91-1.92-1.85-1.92-.99 0-1.87.69-1.87 1.92v10.79Zm7.49 7.42c-1.24 0-1.92.9-1.92 1.87s.68 1.85 1.92 1.85h12.37c1.27 0 2.18-.92 2.18-2.17V9.35c0-1.23-.89-1.92-1.85-1.92-.97 0-1.85.69-1.85 1.92v10.78Z" />
  </svg>
);
export default SvgChevrondownright2Bold;
