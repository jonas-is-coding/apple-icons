import * as React from "react";
const SvgMountfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.212 8.564c0 .95.67 1.83 1.91 1.83h18.95c1.24 0 1.91-.88 1.91-1.83 0-.67-.31-1.38-.99-1.86l-8.25-5.95c-.72-.5-1.43-.75-2.14-.75-.73 0-1.43.25-2.14.75l-8.25 5.95c-.7.48-1 1.19-1 1.86m-.21 5.97c0 .88.69 1.6 1.59 1.6h20.03c.9 0 1.58-.71 1.58-1.6 0-.91-.68-1.6-1.58-1.6H1.592c-.91 0-1.59.71-1.59 1.6m.2 5.96c0 .68.3 1.4.98 1.87l8.25 5.95c.72.5 1.43.75 2.15.75s1.43-.25 2.14-.75l8.25-5.95c.69-.47.99-1.19.99-1.87 0-.95-.66-1.81-1.9-1.81H2.112c-1.24 0-1.91.86-1.91 1.81" />
  </svg>
);
export default SvgMountfillBold;
