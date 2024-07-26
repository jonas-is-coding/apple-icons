import * as React from "react";
const SvgLaptopcomputerandarrowdownBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17.872-.001c-.75 0-1.35.62-1.35 1.34v9.84l.12 1.72-.55-.84-1.43-1.52a1.22 1.22 0 0 0-.89-.39c-.62 0-1.17.47-1.17 1.14 0 .34.12.58.36.82l3.84 3.69c.35.34.71.47 1.07.47s.71-.13 1.08-.47l3.83-3.69c.23-.24.36-.48.36-.82 0-.67-.55-1.14-1.17-1.14-.34 0-.66.14-.88.39l-1.43 1.52-.55.84.12-1.72v-9.84c0-.72-.6-1.34-1.36-1.34m-16.1 24.43h32.21c.96 0 1.77-.79 1.77-1.76 0-.98-.81-1.77-1.77-1.77h-2.33V7.229c0-2.13-1.21-3.33-3.34-3.33h-6.85v3.03h6.12c.7 0 1.05.32 1.05 1.04v12.93H7.122V7.969c0-.72.35-1.04 1.05-1.04h6.13v-3.03h-6.86c-2.09 0-3.34 1.2-3.34 3.33v13.67h-2.33c-.96 0-1.77.79-1.77 1.77 0 .97.81 1.76 1.77 1.76" />
  </svg>
);
export default SvgLaptopcomputerandarrowdownBold;
