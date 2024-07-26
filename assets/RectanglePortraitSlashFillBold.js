import * as React from "react";
const SvgRectangleportraitslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M22.504 19.672V4.142c0-2.68-1.46-4.14-4.12-4.14H5.834c-.97 0-1.77.21-2.39.62Zm.04 5.06c.4.37 1.02.38 1.4 0 .37-.39.38-1.02 0-1.41L1.684 1.082a.975.975 0 0 0-1.4 0c-.38.36-.38 1.02 0 1.39ZM1.724 6.152v15.5c0 2.69 1.45 4.14 4.11 4.14h12.55c.99 0 1.77-.2 2.38-.6Z" />
  </svg>
);
export default SvgRectangleportraitslashfillBold;
