import * as React from "react";
const SvgRjoystickfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.892 16.24c8.06 0 12.9-3.63 12.9-8.12S20.952 0 12.882 0C4.842 0 .002 3.63.002 8.12s4.84 8.12 12.89 8.12m-2.05-4.06c-.72 0-1.13-.46-1.13-1.25V5.31c0-.89.46-1.38 1.32-1.38h2.39c2.03 0 3.23.99 3.23 2.7 0 1.08-.6 1.97-1.58 2.31l1.04 1.52c.18.24.25.46.25.73 0 .6-.46 1-1.07 1-.48 0-.77-.19-1.14-.8l-1.25-2.02h-.94v1.56c0 .78-.43 1.25-1.12 1.25m1.12-4.5h1.17c.72 0 1.13-.38 1.13-1.01 0-.62-.41-1.02-1.11-1.02h-1.19Zm.93 14.44c3.31 0 5.39-1.55 5.39-4.2v-.37c-1.65.39-3.46.59-5.39.59-1.92 0-3.73-.2-5.38-.59v.37c0 2.65 2.06 4.2 5.38 4.2" />
  </svg>
);
export default SvgRjoystickfillBold;
