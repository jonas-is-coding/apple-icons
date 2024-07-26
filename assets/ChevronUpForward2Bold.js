import * as React from "react";
const SvgChevronupforward2Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.412 3.71h10.85v10.8c0 1.23.88 1.92 1.85 1.92.96 0 1.85-.69 1.85-1.92V2.18c0-1.27-.91-2.18-2.18-2.18H9.412c-1.24 0-1.92.88-1.92 1.86 0 .95.68 1.85 1.92 1.85m-7.49 7.43h10.85v10.8c0 1.23.88 1.91 1.87 1.91.94 0 1.85-.68 1.85-1.91V9.61c0-1.27-.92-2.18-2.19-2.18H1.922c-1.23 0-1.92.88-1.92 1.85 0 .96.69 1.86 1.92 1.86" />
  </svg>
);
export default SvgChevronupforward2Bold;
