import * as React from "react";
const SvgDishwashercirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m3.81-18.86c.94 0 1.57.67 1.57 1.61v1.55h-10.8v-1.55c0-.94.63-1.61 1.57-1.61Zm-5.21 2.41c.34 0 .62-.28.62-.62s-.28-.63-.62-.63-.62.29-.62.63.28.62.62.62m-1.96-.24c.21.13.48.08.62-.13.13-.21.07-.49-.14-.62a.443.443 0 0 0-.62.13c-.13.21-.07.48.14.62m-2.06 7.97v-6h10.8v6Zm3.99-4.1h2.84c.23 0 .4-.18.4-.41 0-.24-.17-.4-.4-.4h-2.84c-.24 0-.41.16-.41.4 0 .23.17.41.41.41m6.81 5.06v.23c0 .94-.63 1.61-1.57 1.61h-7.66c-.94 0-1.57-.67-1.57-1.61v-.23Z" />
  </svg>
);
export default SvgDishwashercirclefillBold;
