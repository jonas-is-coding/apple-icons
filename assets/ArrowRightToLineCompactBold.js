import * as React from "react";
const SvgArrowrighttolinecompactBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 9.079c0 1.01.7 1.7 1.76 1.7h9.27l2.4-.16-2.71 2.42-1.99 2.02c-.32.32-.54.71-.54 1.22 0 .92.68 1.62 1.68 1.62.41 0 .84-.18 1.19-.54l6.8-7.02c.24-.25.42-.58.49-.94v7.15c0 .91.73 1.62 1.64 1.62.93 0 1.64-.71 1.64-1.62V1.629c0-.93-.71-1.63-1.64-1.63-.91 0-1.64.7-1.64 1.63v7.13c-.07-.37-.25-.68-.49-.93l-6.8-7.03c-.35-.37-.78-.54-1.19-.54-1 0-1.68.69-1.68 1.62 0 .5.22.9.54 1.21l1.99 2.03 2.7 2.43-2.39-.17h-9.27c-1.06 0-1.76.68-1.76 1.7" />
  </svg>
);
export default SvgArrowrighttolinecompactBold;
