import * as React from "react";
const SvgNcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.5-6.71c-.83 0-1.33-.55-1.33-1.44v-8.62c0-.83.5-1.35 1.27-1.35.57 0 .89.18 1.38.84l4.25 5.82h.1v-5.22c0-.91.48-1.44 1.32-1.44.85 0 1.34.53 1.34 1.44v8.67c0 .81-.48 1.3-1.24 1.3-.56 0-.89-.19-1.35-.8l-4.3-5.9h-.11v5.26c0 .9-.49 1.44-1.33 1.44" />
  </svg>
);
export default SvgNcirclefillBold;
