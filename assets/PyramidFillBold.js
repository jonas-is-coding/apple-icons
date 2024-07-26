import * as React from "react";
const SvgPyramidfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.36 19.055c-.66 1.11-.39 2.18.66 2.65l10.01 4.43c.23.1.44.2.67.27V.005c-.16.12-.29.29-.4.48Zm25.16.01L14.59.494c-.13-.19-.25-.35-.4-.47v26.39c.21-.07.44-.18.68-.27l10-4.42c1.05-.48 1.31-1.54.65-2.66" />
  </svg>
);
export default SvgPyramidfillBold;
