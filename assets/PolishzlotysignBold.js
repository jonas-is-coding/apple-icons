import * as React from "react";
const SvgPolishzlotysignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m15.912 13.156.1-.04v8.15c0 1.36.78 2.14 2.02 2.14 1.12 0 2.03-.67 2.03-2.14v-10.39l1.2-.66c.58-.31.82-.77.82-1.2 0-.81-.86-1.54-1.83-1.01l-.19.1v-5.97c0-1.36-.81-2.14-2.03-2.14-1.24 0-2.02.79-2.02 2.12v8.22l-1.18.64c-.55.31-.79.77-.79 1.19 0 .83.85 1.54 1.87.99m-14.22 9.89h9.24c.96 0 1.6-.55 1.6-1.51 0-.98-.64-1.52-1.6-1.52h-5.62v-.21l6.44-9.73c.41-.62.58-.94.58-1.66 0-1.17-.78-1.78-1.83-1.78h-8.9c-.96 0-1.6.57-1.6 1.52s.64 1.54 1.6 1.54h5.95v.21l-7 10.12c-.31.43-.55.84-.55 1.42 0 .97.65 1.6 1.69 1.6" />
  </svg>
);
export default SvgPolishzlotysignBold;
