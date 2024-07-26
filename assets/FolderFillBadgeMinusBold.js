import * as React from "react";
const SvgFolderfillbadgeminusBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M25.712 12.347c3.36 0 6.16-2.81 6.16-6.18 0-3.38-2.79-6.17-6.16-6.17-3.39 0-6.18 2.8-6.18 6.17 0 3.38 2.79 6.18 6.18 6.18M.002 7.997h18.09a6.3 6.3 0 0 1-.26-1.75c0-1.25.3-2.53.86-3.65h-5.84c-.9 0-1.45-.21-2.2-.78l-.59-.47c-.91-.71-1.53-.95-2.88-.95h-3.27c-2.42 0-3.91 1.47-3.91 4.11Zm22.66-.88c-.5 0-.92-.44-.94-.94-.01-.51.44-.94.94-.94h6.1c.5 0 .93.43.93.94 0 .5-.43.94-.93.94Zm-18.52 15.79h19.2c2.49 0 3.94-1.46 3.94-4.11v-4.85c-.48.12-.98.16-1.48.16-2.97 0-5.6-1.64-6.91-4.17H.002v8.86c0 2.66 1.46 4.11 4.14 4.11" />
  </svg>
);
export default SvgFolderfillbadgeminusBold;
