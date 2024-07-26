import * as React from "react";
const SvgArrowupforwardandarrowdownbackwardBold = ({
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
    <path d="M21.456 10.94c.93 0 1.59-.69 1.59-1.64 0-.92-.66-1.63-1.59-1.63h-.76l-3.01.27 2.25-2.12 2.99-2.98c.31-.31.5-.7.5-1.14 0-1-.7-1.7-1.7-1.7-.44 0-.85.15-1.16.47l-2.98 3-2.12 2.24.26-2.97v-.57c0-.94-.69-1.6-1.63-1.6-.92 0-1.63.67-1.63 1.6v6.25c0 1.6.92 2.52 2.51 2.52ZM9.366 22.72c.93 0 1.64-.67 1.64-1.59V14.8c0-1.58-.93-2.51-2.52-2.51h-6.54c-.94 0-1.59.69-1.59 1.63s.66 1.63 1.59 1.63h.83l3-.26-2.25 2.11-3.02 3.03c-.32.31-.51.7-.51 1.13 0 1.01.71 1.71 1.7 1.71.45 0 .86-.15 1.16-.47l3.02-3.03 2.13-2.25-.27 2.96v.65c0 .94.7 1.59 1.63 1.59" />
  </svg>
);
export default SvgArrowupforwardandarrowdownbackwardBold;
