import * as React from "react";
const SvgRectanglesplit3X1FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M20.562 22.402V.002h3.27c2.69 0 4.14 1.45 4.14 4.11v14.18c0 2.66-1.45 4.11-4.14 4.11Zm-2.88 0h-7.39V.002h7.39Zm-13.54 0c-2.68 0-4.14-1.45-4.14-4.11V4.112c0-2.66 1.46-4.11 4.14-4.11h3.26v22.4Z" />
  </svg>
);
export default SvgRectanglesplit3X1FillBold;
