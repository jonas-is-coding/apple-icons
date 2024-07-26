import * as React from "react";
const SvgShippingboxfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m19.162 7.967 4.25-2.34q-.315-.3-.78-.54l-8.12-4.47c-.77-.41-1.56-.62-2.36-.62s-1.59.21-2.35.62l-2.02 1.12Zm-7.01 3.83 4.93-2.7-11.3-6.26-4.11 2.25q-.465.24-.78.54Zm.96 14.01c.17-.03.33-.11.51-.2l8.89-4.88c1.22-.66 1.79-1.4 1.79-3.03v-9.73c0-.23-.02-.42-.06-.61l-11.13 6.17Zm-1.92 0v-12.28L.052 7.357c-.04.19-.05.38-.05.61v9.73c0 1.63.56 2.37 1.79 3.03l8.9 4.88c.16.09.34.17.5.2" />
  </svg>
);
export default SvgShippingboxfillBold;
