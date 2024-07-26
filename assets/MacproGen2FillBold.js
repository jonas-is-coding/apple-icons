import * as React from "react";
const SvgMacprogen2FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.002 3.18c2.82 0 5.11-.72 5.11-1.6 0-.86-2.29-1.58-5.11-1.58-2.81 0-5.11.72-5.11 1.58 0 .88 2.3 1.6 5.11 1.6m-9 20.34c0 3.64 3.35 5.8 9 5.8s9-2.16 9-5.8V7.07c0-1.36-.34-2.59-.99-3.47-.49-.83-1.26-1.14-2.19-.53-.91.99-3.23 1.61-5.82 1.61s-4.91-.62-5.83-1.61c-.92-.61-1.68-.3-2.19.53-.64.88-.98 2.11-.98 3.47Z" />
  </svg>
);
export default SvgMacprogen2FillBold;
