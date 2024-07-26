import * as React from "react";
const SvgArrowdownleftandarrowuprightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M21.312 10.374c.94 0 1.65-.67 1.65-1.6v-6.25c0-1.6-.93-2.52-2.52-2.52h-6.47c-.94 0-1.61.69-1.61 1.64 0 .93.67 1.63 1.61 1.63h.76l3-.27-2.25 2.12-2.99 2.99c-.3.3-.49.69-.49 1.13 0 1 .69 1.7 1.7 1.7.43 0 .84-.15 1.16-.47l2.96-3 2.14-2.24-.27 2.97v.57c0 .94.7 1.6 1.62 1.6m-12.32 12.6c.93 0 1.6-.7 1.6-1.63-.01-.94-.68-1.63-1.6-1.63h-.77l-3 .26 2.25-2.11 2.99-2.99c.31-.31.5-.69.5-1.14 0-1-.71-1.7-1.7-1.7-.44 0-.85.15-1.16.47l-2.97 2.99-2.13 2.25.27-2.97v-.58c0-.93-.71-1.6-1.63-1.6-.94 0-1.64.67-1.64 1.6v6.27c0 1.59.92 2.51 2.51 2.51Z" />
  </svg>
);
export default SvgArrowdownleftandarrowuprightBold;
