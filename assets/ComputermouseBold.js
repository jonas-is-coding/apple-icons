import * as React from "react";
const SvgComputermouseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.822 27.213c5.77 0 8.83-3.46 8.83-9.94 0-3.75-.14-7.23-.37-9.66-.48-5.33-3.01-7.61-8.46-7.61-5.43 0-7.98 2.28-8.46 7.61-.22 2.43-.36 5.91-.36 9.66 0 6.48 3.06 9.94 8.82 9.94m-5.58-19.74c.34-3.15 1.48-4.38 4.45-4.6v4.6Zm6.74 0v-4.6c2.96.23 4.08 1.46 4.43 4.6Zm-1.16 16.9c-3.96 0-5.99-2.39-5.99-7.1 0-2.74.09-5.36.22-7.5h11.55c.14 2.14.21 4.76.21 7.5 0 4.71-2.01 7.1-5.99 7.1" />
  </svg>
);
export default SvgComputermouseBold;
