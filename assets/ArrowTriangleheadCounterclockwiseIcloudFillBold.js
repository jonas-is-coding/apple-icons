import * as React from "react";
const SvgArrowtriangleheadcounterclockwiseicloudfillBold = ({
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
    <path d="M23.822 21.551c3.83 0 6.88-2.84 6.88-6.38 0-2.54-1.42-4.87-3.8-5.85-.01-5.42-3.92-9.32-9.02-9.32-3.03 0-5.48 1.48-7.07 3.71-3.11-.71-6.21 1.54-6.41 4.88-2.73.56-4.4 3.05-4.4 6.08 0 3.76 3.29 6.88 7.53 6.88Zm-8.11-4.64c-2.65 0-4.8-2.16-4.8-4.82a.954.954 0 0 1 1.91 0c0 1.62 1.29 2.92 2.89 2.92 1.62 0 2.91-1.31 2.91-2.92 0-1.37-.87-2.36-1.9-2.72v1.13c0 .63-.67.89-1.17.47l-2.25-1.9c-.45-.39-.44-.97 0-1.34l2.25-1.87c.5-.4 1.17-.14 1.17.48v1.06c2.09.43 3.8 2.34 3.8 4.67 0 2.68-2.16 4.84-4.81 4.84" />
  </svg>
);
export default SvgArrowtriangleheadcounterclockwiseicloudfillBold;
