import * as React from "react";
const SvgAirplanecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m7.82-12.36c0 .87-1.13 1.56-2.45 1.56h-2.55c-.26 0-.33.04-.52.23l-4.15 4.41a.84.84 0 0 1-.62.3h-.88c-.32 0-.5-.32-.37-.62l2.04-4.33-2.7-.32-1.05 1.82c-.13.21-.33.33-.59.33h-.29c-.3 0-.52-.21-.52-.5v-5.76c0-.29.22-.5.52-.5h.29c.26 0 .46.11.59.33l1.05 1.81 2.7-.3-2.04-4.34c-.13-.3.05-.61.37-.61h.88c.23 0 .47.11.62.28l4.15 4.42c.19.19.26.22.52.22h2.55c1.32 0 2.45.71 2.45 1.57" />
  </svg>
);
export default SvgAirplanecirclefillBold;
