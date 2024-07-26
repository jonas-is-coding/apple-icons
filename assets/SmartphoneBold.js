import * as React from "react";
const SvgSmartphoneBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.402 27.091h12.72c1.38 0 2.27-.92 2.27-2.34v-22.4c0-1.41-.89-2.35-2.27-2.35H2.402c-1.46 0-2.4.94-2.4 2.35v22.4c0 1.42.95 2.34 2.4 2.34m1.15-4.72c-.32 0-.53-.21-.53-.53V3.551c0-.32.21-.52.53-.52h10.29c.33 0 .53.21.53.53v18.28c0 .32-.22.53-.53.53Z" />
  </svg>
);
export default SvgSmartphoneBold;
