import * as React from "react";
const SvgSignpostandarrowtriangleupBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 13.373c0 1.81 1.06 2.87 2.9 2.87h6.66v6.63h-3.2c-.75 0-1.37.62-1.37 1.38 0 .75.62 1.38 1.37 1.38h9.17c.75 0 1.37-.63 1.37-1.38s-.61-1.38-1.37-1.38h-3.22v-6.63h6.66c1.84 0 2.91-1.06 2.91-2.87v-7.44c0-1.82-1.07-2.87-2.91-2.87h-6.66v-1.68c0-.75-.62-1.38-1.37-1.38s-1.38.62-1.38 1.38v1.68h-6.66c-1.84 0-2.9 1.05-2.9 2.87Zm3.36-7.46h15.15c.29 0 .46.19.46.46v6.55c0 .27-.17.46-.46.46H3.362c-.27 0-.44-.19-.44-.46v-6.55c0-.27.17-.46.44-.46m4.88 6.2h5.42c.81 0 1.06-.64.55-1.33l-2.54-3.55c-.4-.55-1.04-.54-1.44 0l-2.56 3.54c-.5.7-.27 1.34.57 1.34" />
  </svg>
);
export default SvgSignpostandarrowtriangleupBold;
