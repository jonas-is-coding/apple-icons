import * as React from "react";
const SvgSignpostandarrowtriangleupfillBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 13.373c0 1.81 1.06 2.87 2.9 2.87h6.66v6.63h-3.2c-.75 0-1.37.62-1.37 1.38 0 .75.62 1.38 1.37 1.38h9.17c.75 0 1.37-.63 1.37-1.38s-.61-1.38-1.37-1.38h-3.22v-6.63h6.66c1.84 0 2.91-1.06 2.91-2.87v-7.44c0-1.82-1.07-2.87-2.91-2.87h-6.66v-1.68c0-.75-.62-1.38-1.37-1.38s-1.38.62-1.38 1.38v1.68h-6.66c-1.84 0-2.9 1.05-2.9 2.87Zm8.08-1.12c-.87 0-1.11-.67-.58-1.41l2.69-3.73c.41-.57 1.09-.6 1.52 0l2.68 3.73c.53.74.27 1.41-.59 1.41Z" />
  </svg>
);
export default SvgSignpostandarrowtriangleupfillBold;
