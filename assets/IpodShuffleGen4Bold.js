import * as React from "react";
const SvgIpodshufflegen4Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 14.469c0 2.03 1.28 3.37 3.22 3.37h12.86c1.94 0 3.22-1.34 3.22-3.37V3.379c0-2.04-1.3-3.38-3.22-3.38H3.222c-1.94 0-3.22 1.34-3.22 3.38Zm3.2-.65v-9.8c0-.61.37-1 .95-1h11c.57 0 .95.39.95 1.14v9.66c0 .61-.38.99-.95.99h-11c-.58 0-.95-.38-.95-.99m6.44-.21c2.59 0 4.7-2.1 4.7-4.69s-2.11-4.7-4.7-4.7-4.67 2.11-4.67 4.7 2.08 4.69 4.67 4.69m.01-2.22a2.45 2.45 0 0 1-2.47-2.47 2.45 2.45 0 0 1 2.47-2.47c1.39 0 2.48 1.09 2.48 2.47s-1.09 2.47-2.48 2.47" />
  </svg>
);
export default SvgIpodshufflegen4Bold;
