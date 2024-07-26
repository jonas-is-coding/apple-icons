import * as React from "react";
const SvgChevroncompactupBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.082 3.936c-.64.28-1.08.83-1.08 1.54 0 1.16.85 1.93 1.83 1.93.56 0 1.25-.33 1.82-.59l7.22-3.09 7.23 3.09c.58.26 1.28.59 1.82.59.98 0 1.84-.77 1.84-1.93 0-.71-.45-1.26-1.08-1.54l-7.77-3.35c-.75-.33-1.32-.59-2.04-.59-.7 0-1.27.26-2.04.59Z" />
  </svg>
);
export default SvgChevroncompactupBold;
