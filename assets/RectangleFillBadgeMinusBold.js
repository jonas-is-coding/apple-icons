import * as React from "react";
const SvgRectanglefillbadgeminusBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.888 22.402h17.12c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11h-19.69c-2.68 0-4.14 1.45-4.14 4.11v6.21c4.35 0 7.92 3.59 7.92 7.92 0 1.53-.43 2.96-1.21 4.16m-6.71 2.02c3.36 0 6.16-2.8 6.16-6.18 0-3.37-2.77-6.16-6.16-6.16s-6.18 2.79-6.18 6.16c0 3.39 2.79 6.18 6.18 6.18m-3.05-5.23c-.5 0-.92-.43-.94-.93-.01-.51.44-.94.94-.94h6.1c.5 0 .93.42.93.94 0 .5-.43.93-.93.93Z" />
  </svg>
);
export default SvgRectanglefillbadgeminusBold;
