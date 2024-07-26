import * as React from "react";
const SvgCloudmoonfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M26.395 14.413c3.57-.87 5.74-3.84 5.74-5.88 0-.5-.21-.86-.62-.86-.65 0-1.55.73-3.24.73-2.77.02-4.51-1.69-4.51-4.24 0-1.64.74-2.83.74-3.52 0-.38-.27-.65-.75-.64-2.06.08-5.06 2.4-5.78 5.69.46.44.87.98 1.2 1.67 3.74.21 6.93 3.1 7.22 7.05m-21.36 6.74h13.57c3.39 0 5.98-2.6 5.98-6.01 0-3.51-2.71-6.1-6.39-6.1-1.26-2.39-3.61-4.21-6.99-4.21-4.06 0-7.42 3.05-7.77 7.07-2.09.58-3.43 2.36-3.43 4.56 0 2.79 2.03 4.69 5.03 4.69" />
  </svg>
);
export default SvgCloudmoonfillBold;
