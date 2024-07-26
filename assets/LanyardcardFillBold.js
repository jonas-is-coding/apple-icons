import * as React from "react";
const SvgLanyardcardfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 21.652c0 2.69 1.45 4.14 4.11 4.14h11.06c2.65 0 4.11-1.45 4.11-4.14V4.142c0-2.68-1.46-4.14-4.11-4.14H4.112c-2.66 0-4.11 1.46-4.11 4.14Zm6.85-17.29c-.46 0-.85-.39-.85-.86 0-.45.39-.85.85-.85h5.57c.48 0 .86.4.86.85 0 .47-.39.86-.86.86Z" />
  </svg>
);
export default SvgLanyardcardfillBold;
