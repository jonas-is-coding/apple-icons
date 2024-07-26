import * as React from "react";
const SvgPersonicloudfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M23.822 21.551c3.83 0 6.88-2.84 6.88-6.38 0-2.54-1.42-4.87-3.8-5.85-.01-5.42-3.92-9.32-9.02-9.32-3.03 0-5.48 1.48-7.07 3.71-3.11-.71-6.21 1.54-6.41 4.88-2.73.56-4.4 3.05-4.4 6.08 0 3.76 3.29 6.88 7.53 6.88Zm-7.86-7.9c-1.69 0-3.02-1.5-3.02-3.3 0-1.77 1.34-3.25 3.02-3.25 1.69 0 3.03 1.48 3.03 3.25 0 1.81-1.33 3.31-3.03 3.3m-6.43 4.92c1.01-1.86 3.31-3.61 6.43-3.61 3.13 0 5.41 1.75 6.43 3.61Z" />
  </svg>
);
export default SvgPersonicloudfillBold;
