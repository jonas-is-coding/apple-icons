import * as React from "react";
const SvgIcloudfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M23.822 21.551c3.83 0 6.88-2.84 6.88-6.38 0-2.54-1.42-4.87-3.8-5.85-.01-5.42-3.92-9.32-9.02-9.32-3.03 0-5.48 1.48-7.07 3.71-3.11-.71-6.21 1.54-6.41 4.88-2.73.56-4.4 3.05-4.4 6.08 0 3.76 3.29 6.88 7.53 6.88Z" />
  </svg>
);
export default SvgIcloudfillBold;
