import * as React from "react";
const SvgPlusforwardslashminusBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m12.622 11.559 6.41-9.5c.2-.3.3-.58.3-.9 0-.67-.55-1.16-1.23-1.16-.63 0-.93.21-1.36.82l-6.48 9.69-6.51 9.61c-.2.3-.32.55-.32.93 0 .71.62 1.15 1.31 1.15.54 0 .87-.2 1.27-.8ZM.002 5.929c0 .65.53 1.17 1.17 1.17h2.05v2.04c0 .66.53 1.19 1.17 1.19.66 0 1.17-.53 1.17-1.19v-2.04h2.06c.64 0 1.17-.52 1.17-1.17 0-.64-.53-1.17-1.17-1.17h-2.06v-2.05c0-.66-.52-1.17-1.17-1.17-.64 0-1.17.51-1.17 1.17v2.05h-2.05c-.64 0-1.17.53-1.17 1.17m14.04 11.11c0 .64.52 1.17 1.17 1.17h6.44c.65 0 1.18-.53 1.18-1.17 0-.66-.53-1.17-1.18-1.17h-6.44c-.65 0-1.17.51-1.17 1.17" />
  </svg>
);
export default SvgPlusforwardslashminusBold;
