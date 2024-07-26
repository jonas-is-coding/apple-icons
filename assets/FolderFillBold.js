import * as React from "react";
const SvgFolderfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 7.598h27.28v-1.28c0-2.66-1.47-4.12-4.14-4.12h-10.29c-.9 0-1.45-.21-2.2-.78l-.59-.47c-.91-.71-1.53-.95-2.88-.95h-3.27c-2.42 0-3.91 1.47-3.91 4.11Zm0 10.8c0 2.66 1.46 4.11 4.14 4.11h19.2c2.49 0 3.94-1.46 3.94-4.11v-8.86H.002Z" />
  </svg>
);
export default SvgFolderfillBold;
