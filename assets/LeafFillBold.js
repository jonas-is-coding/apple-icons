import * as React from "react";
const SvgLeaffillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.362.887c-.26 1.21-.36 2.82-.36 3.92 0 9.06 5.44 15.03 13.73 15.03 4 0 6.38-1.71 7.64-3.06.93 1.37 1.41 2.78 2.01 4.67.2.61.64.9 1.16.9.99 0 1.8-.87 1.8-2.02 0-1.67-2.46-4.6-3.73-5.77-5.36-5-13.47-1.94-15.38-7.23-.13-.33.22-.54.49-.27 4.09 4.4 9.62.78 14.63 5.36.55.5 1.23.27 1.33-.32.06-.33.1-.87.1-1.43 0-5.79-3.98-8.9-10-8.9-1.96 0-4.24.52-6 .52-1.83 0-3.9-.12-5.63-1.9-.64-.66-1.57-.47-1.79.5" />
  </svg>
);
export default SvgLeaffillBold;
