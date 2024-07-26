import * as React from "react";
const SvgRectangleportraitlefthalffilledBold = ({
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
    <path d="M.002 21.652c0 2.69 1.45 4.14 4.11 4.14h12.55c2.66 0 4.12-1.45 4.12-4.14V4.142c0-2.68-1.46-4.14-4.12-4.14H4.112c-2.66 0-4.11 1.46-4.11 4.14Zm10.39 1.12V3.022h5.91c1 0 1.45.51 1.45 1.45v16.86c0 .93-.45 1.44-1.45 1.44Z" />
  </svg>
);
export default SvgRectangleportraitlefthalffilledBold;
