import * as React from "react";
const SvgCurtainsopenBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.902 26.002h2.31c.68 0 1.16-.47 1.16-1.16V3.992h12.39v20.85c0 .69.47 1.16 1.15 1.16h2.33c.68 0 1.16-.47 1.16-1.16V3.992h.86c.38.46.98.75 1.63.75 1.24 0 2.25-1.02 2.25-2.26s-1.01-2.26-2.25-2.26c-.65 0-1.24.3-1.62.75h-.88c-.08-.59-.53-.97-1.15-.97h-2.33c-.61 0-1.06.38-1.14.97H9.362c-.08-.59-.53-.97-1.14-.97h-2.33c-.62 0-1.06.38-1.15.97h-.86c-.39-.45-.98-.75-1.62-.75a2.27 2.27 0 0 0-2.26 2.26 2.27 2.27 0 0 0 2.26 2.26c.64 0 1.24-.29 1.62-.75h.85v20.85c0 .69.48 1.16 1.17 1.16" />
  </svg>
);
export default SvgCurtainsopenBold;
