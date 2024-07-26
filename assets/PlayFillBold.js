import * as React from "react";
const SvgPlayfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 19.302c0 1.5.92 2.26 2.03 2.26.45 0 .94-.14 1.43-.41l14.18-8.26c1.07-.63 1.6-1.21 1.6-2.11s-.53-1.49-1.6-2.11L3.462.412c-.49-.28-.98-.41-1.43-.41-1.11 0-2.03.76-2.03 2.25Z" />
  </svg>
);
export default SvgPlayfillBold;
