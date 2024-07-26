import * as React from "react";
const SvgCloudBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.242 19.616h15.58c4.21 0 7.47-3.19 7.47-7.3 0-4.16-3.24-7.36-7.68-7.36-1.63-3.17-4.53-4.96-8.22-4.96-4.73 0-8.68 3.46-9.28 8.3-2.53.81-4.11 2.92-4.11 5.51 0 3.29 2.46 5.81 6.24 5.81m.07-2.74c-2.23 0-3.57-1.17-3.57-3.01 0-1.6 1.03-2.72 2.98-3.23.68-.17.92-.45 1.02-1.24.46-3.99 3.12-6.65 6.65-6.65 2.62 0 4.74 1.48 6.1 4.12.31.62.65.83 1.41.83 3.6 0 5.64 1.95 5.64 4.69 0 2.57-2.01 4.49-4.72 4.49Z" />
  </svg>
);
export default SvgCloudBold;
