import * as React from "react";
const SvgRectangleportraitsplit2X1FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.902 25.792V.002h4.76c2.66 0 4.12 1.46 4.12 4.14v17.51c0 2.69-1.46 4.14-4.12 4.14Zm-11.9-4.14V4.142c0-2.68 1.45-4.14 4.11-4.14h4.77v25.79h-4.77c-2.66 0-4.11-1.45-4.11-4.14" />
  </svg>
);
export default SvgRectangleportraitsplit2X1FillBold;
