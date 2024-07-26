import * as React from "react";
const SvgArrowdownforwardandarrowupbackwardBold = ({
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
    <path d="M1.966 10.94h6.48c1.6 0 2.51-.92 2.51-2.52V2.17c0-.93-.7-1.6-1.63-1.6-.94 0-1.63.66-1.63 1.6v.57l.26 2.97-2.12-2.24-2.98-3c-.3-.32-.71-.47-1.16-.47-.99 0-1.7.7-1.7 1.7 0 .44.19.83.51 1.14l2.99 2.98 2.25 2.12-3.02-.27h-.76c-.92 0-1.59.71-1.59 1.63 0 .95.67 1.64 1.59 1.64m12.1 11.78c.92 0 1.63-.65 1.63-1.59v-.65l-.27-2.96 2.13 2.25 3.01 3.03c.31.32.72.47 1.16.47 1 0 1.7-.7 1.7-1.71 0-.43-.19-.82-.5-1.13l-3.03-3.03-2.25-2.11 3 .26h.83c.93 0 1.6-.69 1.6-1.63s-.66-1.63-1.6-1.63h-6.53c-1.6 0-2.52.93-2.52 2.51v6.33c0 .92.7 1.59 1.64 1.59" />
  </svg>
);
export default SvgArrowdownforwardandarrowupbackwardBold;
