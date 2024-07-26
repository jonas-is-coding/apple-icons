import * as React from "react";
const SvgCurtainsclosedBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.892 26.002h7.81c.68 0 1.16-.47 1.16-1.16V3.992h1.7v20.85c0 .69.47 1.16 1.15 1.16h7.81c.68 0 1.15-.47 1.15-1.16V3.992h.87c.38.46.97.75 1.61.75 1.25 0 2.27-1.02 2.27-2.26s-1.02-2.26-2.27-2.26c-.64 0-1.23.3-1.61.75h-.88c-.07-.59-.53-.97-1.14-.97h-7.81c-.61 0-1.06.38-1.14.97h-1.72c-.09-.59-.53-.97-1.14-.97h-7.82c-.62 0-1.06.38-1.15.97h-.86c-.39-.45-.98-.75-1.62-.75a2.27 2.27 0 0 0-2.26 2.26 2.27 2.27 0 0 0 2.26 2.26c.64 0 1.24-.29 1.62-.75h.85v20.85c0 .69.48 1.16 1.16 1.16" />
  </svg>
);
export default SvgCurtainsclosedBold;
