import * as React from "react";
const SvgIpodshufflegen2Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 14.588c0 2.04 1.28 3.38 3.22 3.38h16.2c1.94 0 3.22-1.34 3.22-3.38V3.367c0-2.03-1.28-3.37-3.22-3.37h-16.2c-1.94 0-3.22 1.34-3.22 3.37Zm3.2-.64v-9.93c0-.61.37-.99.95-.99h14.34c.57 0 .95.38.95 1.13v9.79c0 .61-.38.99-.95.99H4.152c-.58 0-.95-.38-.95-.99m10.12-.28c2.59 0 4.69-2.1 4.69-4.69s-2.1-4.7-4.69-4.7-4.67 2.11-4.67 4.7 2.08 4.69 4.67 4.69m0-2.22c-1.37 0-2.46-1.09-2.46-2.47s1.09-2.47 2.46-2.47c1.39 0 2.48 1.09 2.48 2.47s-1.09 2.47-2.48 2.47" />
  </svg>
);
export default SvgIpodshufflegen2Bold;
