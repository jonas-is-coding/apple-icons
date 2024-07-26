import * as React from "react";
const SvgRefrigeratorfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 9.633h18.37v-6.53c0-1.84-1.24-3.1-3.03-3.1H3.022c-1.79 0-3.02 1.26-3.02 3.1Zm3.92-2.34c-.48 0-.83-.37-.83-.86v-2.67c0-.48.35-.83.83-.83s.85.34.85.83v2.67c0 .48-.35.86-.85.86m-3.92 15.22h18.37v-11.17H.002Zm3.92-4.97c-.48 0-.83-.35-.83-.84v-2.68c0-.48.35-.84.83-.84s.85.35.85.84v2.68c0 .48-.35.84-.85.84m-3.92 6.68v.67c0 1.84 1.23 3.1 3.02 3.1h12.32c1.79 0 3.03-1.26 3.03-3.1v-.67Z" />
  </svg>
);
export default SvgRefrigeratorfillBold;
