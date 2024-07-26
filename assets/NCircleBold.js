import * as React from "react";
const SvgNcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-3.33-3.92c.79 0 1.26-.51 1.26-1.36v-5.04h.09l4.1 5.65c.44.57.74.75 1.28.75.72 0 1.16-.47 1.16-1.23v-8.24c0-.86-.46-1.36-1.25-1.36s-1.24.51-1.24 1.36v5h-.1l-4.05-5.57c-.47-.62-.76-.79-1.3-.79-.73 0-1.19.5-1.19 1.28v8.19c0 .84.46 1.36 1.24 1.36" />
  </svg>
);
export default SvgNcircleBold;
