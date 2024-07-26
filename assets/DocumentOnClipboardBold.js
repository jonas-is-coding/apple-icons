import * as React from "react";
const SvgDocumentonclipboardBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 26.25c0 2.68 1.45 4.14 4.11 4.14h10.89c2.66 0 4.11-1.47 4.11-4.14v-2.16h1.89c2.66 0 4.1-1.46 4.1-4.13V4.14c0-2.68-1.44-4.14-4.1-4.14h-10.89c-2.66 0-4.11 1.46-4.11 4.14V6.3h-1.89c-2.66 0-4.11 1.47-4.11 4.14Zm12.92-21.74c-.52 0-.86-.4-.86-.83v-.29c0-.36.28-.84.86-.84h5.25c.6 0 .87.48.87.84v.29c0 .43-.34.83-.87.83Zm-9.9 21.41V10.77c0-.94.46-1.44 1.45-1.44h3.18v5.74c0 2.04.97 2.99 3 2.99h5.44v7.86c0 .95-.47 1.44-1.47 1.44H4.472c-.99 0-1.45-.49-1.45-1.44m7.85-10.33c-.5 0-.73-.24-.73-.75V9.81l5.7 5.78Z" />
  </svg>
);
export default SvgDocumentonclipboardBold;
