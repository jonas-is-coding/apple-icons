import * as React from "react";
const SvgButtonhorizontalfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.352 22.112h9.56c6.98 0 9.35-2.45 9.35-9.24v-3.63c0-6.79-2.37-9.24-9.35-9.24h-9.56c-6.98 0-9.35 2.45-9.35 9.24v3.63c0 6.79 2.37 9.24 9.35 9.24" />
  </svg>
);
export default SvgButtonhorizontalfillBold;
