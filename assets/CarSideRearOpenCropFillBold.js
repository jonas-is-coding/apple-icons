import * as React from "react";
const SvgCarsiderearopencropfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002.44v17.47h7.02c-.11-.43-.15-.86-.15-1.29 0-2.97 2.37-5.34 5.34-5.34a5.32 5.32 0 0 1 5.34 5.34c0 .43-.06.86-.16 1.29h.49c2.81 0 4.23-1.5 4.23-4.47v-3.32c0-2.41-1.24-3.9-3.65-4.74l-1.2-.41 1.96-1.98c.31-.33.62-.47 1.12-.47h1.47c.78 0 1.29-.53 1.29-1.27 0-.73-.52-1.25-1.29-1.25h-1.42c-1.4 0-2.16.33-2.94 1.11l-2.37 2.39C12.842 1.82 9.872.22 6.202.22h-1.88c-1.74 0-3.14.06-4.32.22m12.21 19.95a3.76 3.76 0 0 0 3.77-3.77c0-2.1-1.68-3.76-3.77-3.76-2.1 0-3.79 1.66-3.79 3.76a3.77 3.77 0 0 0 3.79 3.77" />
  </svg>
);
export default SvgCarsiderearopencropfillBold;
