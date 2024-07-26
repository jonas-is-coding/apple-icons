import * as React from "react";
const SvgPencilandscribbleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m32.226 4.548 1.4-1.39c.7-.69.73-1.48.09-2.14l-.57-.57c-.63-.64-1.44-.57-2.13.09l-1.41 1.4Zm-13.61 13.59 12.32-12.32-2.6-2.6-12.32 12.32-1.18 3c-.19.46.3.93.72.77Zm-18.3 1.35c1.23 3.64 6.77 4.24 12.82 1.29l-1.01-2.13c-4.54 2.17-8.81 1.93-9.46-.22-1.52-5 11.24-6.64 9.52-11.89-1.03-3.11-6.99-2.45-11.45.54-1.35.9-.31 2.8 1.3 1.96 2.5-1.48 7.41-2.93 7.83-1.78.29.81-.52 1.47-3.48 3.16-3.17 1.81-7.61 4.54-6.07 9.07" />
  </svg>
);
export default SvgPencilandscribbleBold;
