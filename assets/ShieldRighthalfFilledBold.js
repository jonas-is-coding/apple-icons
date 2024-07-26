import * as React from "react";
const SvgShieldrighthalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M20.352 14.195v-8.68c0-1.67-.56-2.35-2.01-2.97-1.16-.48-5.43-1.97-6.52-2.28-.5-.14-1.13-.27-1.64-.27s-1.13.11-1.65.27c-1.09.36-5.36 1.79-6.52 2.28-1.45.62-2.01 1.3-2.01 2.97v8.68c0 4.26 2.42 6.13 9.29 9.7.31.15.65.26.89.26s.58-.11.88-.26c6.86-3.59 9.29-5.44 9.29-9.7m-10.3 6.86c-.11-.02-.23-.08-.47-.21-5.08-3.03-6.78-3.92-6.78-7.1v-7.84c0-.44.09-.63.43-.76 1.68-.62 4.87-1.72 6.08-2.18.34-.12.53-.16.74-.18Z" />
  </svg>
);
export default SvgShieldrighthalffilledBold;
