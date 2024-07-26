import * as React from "react";
const SvgBolthorizontalicloudfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M23.822 21.551c3.83 0 6.88-2.84 6.88-6.38 0-2.54-1.42-4.87-3.8-5.85-.01-5.42-3.92-9.32-9.02-9.32-3.03 0-5.48 1.48-7.07 3.71-3.11-.71-6.21 1.54-6.41 4.88-2.73.56-4.4 3.05-4.4 6.08 0 3.76 3.29 6.88 7.53 6.88Zm-15.96-7.63 3.81-4.82c.32-.38.66-.56 1.01-.56.27 0 .51.08.79.24l4.5 2.48 3.82-1.97c.97-.48 1.73.46 1.07 1.29l-3.83 4.84c-.31.38-.65.56-1.01.56-.26 0-.51-.08-.78-.23l-4.52-2.5-3.79 1.98c-.96.48-1.76-.44-1.07-1.31" />
  </svg>
);
export default SvgBolthorizontalicloudfillBold;
