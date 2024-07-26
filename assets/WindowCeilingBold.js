import * as React from "react";
const SvgWindowceilingBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.49 12.785c-1.09 1.88-.28 3.86 1.58 4.35l.23.01-1.05 3.77c-.56 2.01.53 3.44 2.59 3.44h16.02c1.29 0 2.24-.75 2.6-1.98l5.29-18.43c.61-2.13-.58-3.95-2.92-3.95H9.76c-1.54 0-2.27.63-3.01 1.92Zm16.17-5.66 2.4-4.2h5.11c.52 0 .72.33.45.8l-1.96 3.4Zm-9.58 0 2.19-3.8c.16-.29.34-.4.67-.4h5.8l-2.41 4.2Zm-3.75 6.47 2.08-3.61h6.26l-2.53 4.41H3.77c-.51 0-.7-.33-.44-.8m9.16.78 2.52-4.39H21l-2.31 4.01c-.16.28-.34.38-.67.38Zm8.11 1.69 1.34-2.34-2.02 6.92-1.38-3.35c.98-.08 1.47-.48 2.06-1.23m-16.35 4.84 1-3.6h10.36l1.7 4.11H4.64c-.33 0-.47-.18-.39-.51" />
  </svg>
);
export default SvgWindowceilingBold;
