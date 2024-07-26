import * as React from "react";
const SvgCartopdoorslidingrightopenfillBold = ({
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
    <path d="M8.942 31.533c6.21 0 8.95-1.54 8.95-5.13v-8.73h2.59v7.5c0 .81.6 1.38 1.39 1.38.78 0 1.37-.57 1.37-1.37v-11.37c0-.79-.59-1.37-1.37-1.37-.79 0-1.39.58-1.39 1.39v1.48h-2.59v-9.34c0-3.85-3.18-5.97-8.95-5.97-5.75 0-8.94 2.13-8.94 5.97v20.43c0 3.59 2.74 5.13 8.94 5.13m0-18.28c-1.23 0-2.95.11-3.43.11-.94 0-1.34-.37-1.42-1.33l-.21-2.39c-.17-1.8 1.17-2.51 5.06-2.51 3.9 0 5.24.71 5.07 2.51l-.21 2.39c-.08.96-.48 1.33-1.41 1.33-.49 0-2.24-.11-3.45-.11m0 13.22c-4.01 0-5.3-.62-5.02-2.47l.17-1.14c.21-1.49 1.45-1.99 4.85-1.99 3.41 0 4.65.5 4.87 1.99l.17 1.14c.27 1.85-1.01 2.47-5.04 2.47" />
  </svg>
);
export default SvgCartopdoorslidingrightopenfillBold;
