import * as React from "react";
const SvgPenciltipcropcirclebadgeminusfillBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M16.497 24.766c6.79 0 12.38-5.59 12.38-12.39 0-6.79-5.59-12.38-12.39-12.38-6.27 0-11.51 4.77-12.27 10.86.63-.18 1.28-.27 1.96-.27a7.75 7.75 0 0 1 6.22 3.14l.11-.38c.17-.42.58-.72 1.05-.77h.04l1.97-5.52c.31-.88 1.55-.88 1.88 0l1.97 5.52h.04c.68.08 1.2.63 1.39 1.32l1.29 5.24c.4 1.52-1.76 2.03-2.12.59l-1.21-5.09h-4.6l-.41 1.81c.19.65.31 1.34.31 2.07 0 2.05-.81 3.95-2.13 5.37 1.41.56 2.93.88 4.52.88m-10.32-.07c3.36 0 6.16-2.82 6.16-6.18 0-3.38-2.79-6.16-6.16-6.16-3.39 0-6.18 2.78-6.18 6.16 0 3.37 2.79 6.18 6.18 6.18m-3.05-5.23c-.5 0-.92-.45-.94-.95-.01-.49.44-.94.94-.94h6.1c.5 0 .93.44.93.94s-.43.95-.93.95Z" />
  </svg>
);
export default SvgPenciltipcropcirclebadgeminusfillBold;
