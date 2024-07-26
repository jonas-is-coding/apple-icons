import * as React from "react";
const SvgChevroncompactrightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m3.472 20.688 3.35-7.77c.33-.77.58-1.33.58-2.04 0-.72-.25-1.29-.58-2.05l-3.35-7.76c-.28-.62-.85-1.07-1.55-1.07-1.16 0-1.92.85-1.92 1.83 0 .54.31 1.24.57 1.82l3.1 7.23-3.1 7.23c-.26.57-.57 1.26-.57 1.81 0 .99.76 1.83 1.92 1.83.7 0 1.27-.44 1.55-1.06" />
  </svg>
);
export default SvgChevroncompactrightBold;
