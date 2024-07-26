import * as React from "react";
const SvgAirplayvideoBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M24.992-.004H3.622c-2.26 0-3.62 1.36-3.62 3.63v12.22c0 2.26 1.36 3.62 3.62 3.62h2.82l2.53-2.87h-5.05c-.68 0-1.05-.35-1.05-1.06V3.926c0-.7.37-1.05 1.05-1.05h20.77c.68 0 1.05.35 1.05 1.05v11.61c0 .71-.37 1.06-1.05 1.06h-5.04l2.53 2.87h2.81c2.27 0 3.63-1.36 3.63-3.62V3.626c0-2.27-1.36-3.63-3.63-3.63m-3.24 23.24c.61 0 .84-.63.46-1.08l-7.34-8.3c-.29-.34-.82-.34-1.13 0l-7.32 8.3c-.39.45-.15 1.08.46 1.08Z" />
  </svg>
);
export default SvgAirplayvideoBold;
