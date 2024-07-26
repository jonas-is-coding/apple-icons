import * as React from "react";
const SvgRecordingtapeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 8.204c0 4.55 3.68 8.21 8.21 8.21h20.58c4.52 0 8.2-3.68 8.2-8.21 0-4.55-3.68-8.2-8.2-8.2-4.55 0-8.23 3.66-8.23 8.2 0 1.92.73 3.71 1.94 5.05h-8.01a7.54 7.54 0 0 0 1.94-5.05c0-4.55-3.68-8.2-8.22-8.2-4.53 0-8.21 3.66-8.21 8.2m3.16-.01c0-2.79 2.26-5.05 5.05-5.05s5.05 2.26 5.05 5.05a5.05 5.05 0 1 1-10.1 0m20.57 0c0-2.79 2.26-5.05 5.05-5.05s5.05 2.26 5.05 5.05a5.05 5.05 0 1 1-10.1 0" />
  </svg>
);
export default SvgRecordingtapeBold;
